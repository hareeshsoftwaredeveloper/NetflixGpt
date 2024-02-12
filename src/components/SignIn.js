import React, { useRef, useState } from 'react'
import Header from "./Header"
import { checkValidation } from '../utils/validate'
import { auth } from "../utils/firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { bgImage } from '../utils/constants';
import { userAvatar } from '../utils/constants'
const SignIn = () => {
    const dispatch=useDispatch()
    // const navigate=useNavigate()
    const [signIn, setSignIn] = useState(false)

    const [errorMessage, setErrorMEssage]=useState(null)
    const name=useRef()
    const email=useRef(null)
    const password=useRef(null)

    const handleSignInForm = () => {
     setSignIn(!signIn)
    }
    

    const handleSignIn = () => {
        
        const message=checkValidation(email.current.value, password.current.value) 

        setErrorMEssage(message)

        if (message) return 

        if (signIn) {

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL:userAvatar
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser ;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL }))
                      }).catch((error) => {
                         setErrorMEssage(error.message)
                      });
    
               console.log(user)
               

           })
           .catch((error) => {
               setErrorMEssage(error.message)
           });
            
        }

        else {
            
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {

                    
                   
                
                })
                .catch((error) => {
                    setErrorMEssage(error.message)
                });
                }

            }

  return (
      <div>
          <Header />
          <div className="absolute" >
            <img alt="bgimage" src={bgImage} />
          </div>
          <form onSubmit={(e)=>e.preventDefault() } className='absolute w-3/12  bg-black my-12 mx-auto left-0 right-0 text-white px-10 pt-2 pb-14 bg-opacity-80'>
              <h1 className='text-2xl font-bold p-2 pt-6'>{signIn ? "Sign Up" : "Sign In" }</h1>
              <div className='flex flex-col w-60'>
                  {signIn && <input type='text' ref={name} placeholder='Your Name' className='p-2 bg-gray-700 py-2 m-2 rounded-sm'/>}
                  <input ref={email} type='text' placeholder='Email or phone number' className='p-2 bg-gray-700 py-2 m-2 rounded-sm'/>
                  <input ref={password} type='password' placeholder='Password' className='p-2 bg-gray-700 py-2 m-2 rounded-sm' />
                  <p className=' text-red-600 text-sm mx-2 mb-2'>{ errorMessage}</p>
                  <button className='py-2 px-4 m-2 bg-red-700 rounded-sm' onClick={handleSignIn}>{signIn ? "Sign Up": "Sign In"}</button>
                  <h3 className='text-center'>{!signIn && "Forgot Password ?"}</h3>
              </div>
              <div className='px-2 mt-6 '>
                  <input type="checkbox" checked id='checkbox' className='my-2'/>
                  <label htmlFor='checkbox' className='mx-3'>Remember me</label>
                  <h2 className='my-4 text-[14px] cursor-pointer' onClick={handleSignInForm}>{signIn ?"Already a user? Sign In now": "New to Netflix?Sign-Up for now"} </h2>
                  <p className='text-[12px]'>This page is protected by Google recaptcha to ensure you are not a bot.<span className=' text-blue-700'><a target="_blank" href='google.com'>Learn more</a></span></p>
              </div>
          </form>

      </div>
  )
}

export default SignIn