import React, { useState } from 'react'
import Header from "./Header"

const SignIn = () => {
    const [signIn, setSignIn]=useState(false)

    const handleSignInForm = () => {
     setSignIn(!signIn)
 }

  return (
      <div>
          <Header />
          <div className="absolute" >
            <img alt="bgimage" src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
          </div>
          <form className='absolute w-3/12  bg-black my-12 mx-auto left-0 right-0 text-white px-10 pt-2 pb-14 bg-opacity-80'>
              <h1 className='text-2xl font-bold p-2 pt-6'>{signIn ? "Sign Up" : "Sign In" }</h1>
              <div className='flex flex-col w-60'>
                  {signIn && <input type='text' placeholder='Your Name' className='p-2 bg-gray-700 py-2 m-2 rounded-sm'/>}
                  <input type='text' placeholder='Email or phone number' className='p-2 bg-gray-700 py-2 m-2 rounded-sm'/>
                  <input type='password' placeholder='Password' className='p-2 bg-gray-700 py-2 m-2 rounded-sm'/>
                  <button className='py-2 px-4 m-2 bg-red-700 rounded-sm'>{signIn ? "Sign Up": "Sign In"}</button>
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