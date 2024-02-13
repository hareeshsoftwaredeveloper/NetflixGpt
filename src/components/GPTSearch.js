import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import { bgImage } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 bg-opacity-80 " >
            <img alt="bgimage" src={bgImage} />
          </div>
      <GPTSearchBar/> 
      
      
    </div>
  )
}

export default GPTSearch