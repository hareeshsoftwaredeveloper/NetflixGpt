import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, Language_Constants } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {

  const dispatch = useDispatch()

  
    

  const user = useSelector(store => store.user)
  const gptSearch=useSelector(store=>store.gpt.showGptSearch)
 
  

  const navigate = useNavigate()
  
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          
            const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
          navigate("/browse")
            
        } else {
          dispatch(removeUser())
          navigate("/")
            
        }
    }); 
    
    return ()=>unsubscribe()
}, [])


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
    
    })
    .catch((error) => {
      navigate("/error")
    });
    
  }

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView())
  }

  const handleSelectChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    
      <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex  flex-col md:flex-row justify-between'>
      <img className='w-44 mx-auto md:mx-0' src={LOGO} alt="logo" />
      {user &&
        <div className='flex p-2 justify-between'>
          {gptSearch &&
            <select onChange={handleSelectChange} className='py-2 pl-3 pr-1 outline-none cursor-pointer bg-gray-900 text-white m-2 rounded-lg '>
              {Language_Constants.map(lan => <option key={lan.identifier} value={lan.identifier}>{lan.name}</option>)}
            </select>
          }
          <button onClick={handleGPTSearch} className='py-2 px-4 my-2 bg-purple-800 rounded-lg mx-4 text-white'>{ gptSearch ? "Home": "GPT Search"}</button>
          <img className='w-12 h-12 hidden md:block' src={user.photoURL} alt='user-icon' />
          <button onClick={handleSignOut} className=' font-bold text-white ml-4 rounded-md border border-white px-2 py-1 text-sm'>Sign Out</button>
        </div>
      }
      </div>
     
      
  
  )
}

export default Header