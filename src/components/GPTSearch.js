import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import { bgImage } from '../utils/constants'

const GPTSearch = () => {
  return (
   <>
     <div className="fixed -z-10 " >
            <img className="h-screen w-[100vw] object-cover " alt="bgimage" src={bgImage} />
      </div>
       
      <div className=''>
        <GPTSearchBar/> 
      </div>
      
      
      </>
  )
}

export default GPTSearch