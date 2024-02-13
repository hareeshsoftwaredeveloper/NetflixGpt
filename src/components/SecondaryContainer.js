import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  
  
  return (
      <div>
      {movies.nowPlayingMovies && 
        (
        <div className=' bg-black bg-gradient-to-b'>
          <div className='-mt-52 pl-12 relative z-20'>
            <MovieList title={"Trending"} movies={ movies.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={ movies.popularMovies} />
            <MovieList title={"Top Rated"} movies={ movies.topRatedMovies} />
            <MovieList title={"Upcoming"} movies={ movies.upComingMovies} />
            <MovieList title={"Horror"} movies={ movies.nowPlayingMovies} />
            

          </div>


        </div>
        
        )
        
        
        }

      </div>
  )
}

export default SecondaryContainer