import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAI'
import { gptResults } from '../utils/gptSlice'
import {  TMDB_MOVIE_BY_NAME_URL, options } from '../utils/constants'
import MovieList from "./MovieList"

const GPTSearchBar = () => {
    const dispatch=useDispatch()
    const searchText=useRef(null)

  const langKey = useSelector((store) => store.config.lang)
  const tmdbMovieResults=useSelector((store)=>store.gpt.gptResults)
    
    const handleOpenAISearch = async() => {

        
        // Make an API call to open AI using searchText and get movie results.
        const gptQuery="Act as a movie recommendation system and suggest some movies for the query : "+searchText.current.value+"only give me names of top 5 movies, comma seperated like the example result given ahead. Example Result:  Gadar, sholey,Bahubali, RRR,KGF "
        const gptResponse=await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
      const gptMovieResults=gptResponse.choices[0].message.content.split(",")
      const tmdbData = await Promise.all (gptMovieResults.map(movie=>fetch(TMDB_MOVIE_BY_NAME_URL+movie, options)))
      const tmdbJson=await Promise.all (tmdbData.map(response => response.json()))
      dispatch(gptResults(tmdbJson))
    }
    
    
    
  return (
      <div className='pt-[30%] md:pt-[10%]'>
          
          <form className='bg-black w-full md:w-1/2 grid grid-cols-12 m-auto' onSubmit={(e)=>e.preventDefault()}>
              <input ref={searchText} type='search' placeholder={lang[langKey].searchPlaceholder} className='p-4 m-4 col-span-9 '/>
               <button onClick={handleOpenAISearch } className='px-4 py-2 col-span-3 m-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search }</button>
          </form>  
          
    
      {tmdbMovieResults && 
        <div className='f flex flex-col px-12 py-6 opacity-95'>
          {tmdbMovieResults.map(movie => <MovieList title={movie[0]?.results[0]?.title} movies={movie.results} />)} 
        </div> 
      }

       
    </div>

          
  )
}

export default GPTSearchBar