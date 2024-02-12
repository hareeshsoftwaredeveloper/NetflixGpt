import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {

  const dispatch = useDispatch()
    

  const user = useSelector(store => store.user)
  

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
  return (
    
      <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img className='w-44' src={LOGO} alt="logo" />
      {user &&
        <div className='flex p-2 items-center'>
          <img className='w-12 h-12 ' src={user.photoURL} alt='user-icon' />
          <button onClick={handleSignOut} className=' font-bold text-white ml-4 rounded-md border border-white px-2 py-1 text-sm'>Sign Out</button>
        </div>
      }
      </div>
     
      
  
  )
}

export default Header