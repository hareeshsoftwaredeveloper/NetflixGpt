import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openAI'



const GPTSearchBar = () => {

    const searchText=useRef(null)

    const langKey = useSelector((store) => store.config.lang)
    
    const handleOpenAISearch = async() => {

        
        // Make an API call to open AI using searchText and get movie results.
        const gptQuery="Act as a movie recommendation system and suggest some movies for the query : "+searchText.current.value+"only give me names of top 5 movies, comma seperated like the example result given ahead. Example Result:  Gadar, sholey,Bahubali, RRR,KGF "
        const gptResults=await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          console.log(gptResults)
    }
    
    
    
  return (
      <div className=' pt-[10%] flex justify-center'>
          
          <form className='bg-black w-1/2 grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()}>
              <input ref={searchText} type='search' placeholder={lang[langKey].searchPlaceholder} className='p-4 m-4 col-span-9 '/>
              <button onClick={handleOpenAISearch} className='px-4 py-2 col-span-3 m-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search }</button>

          </form>   
       
    </div>

          
  )
}

export default GPTSearchBar