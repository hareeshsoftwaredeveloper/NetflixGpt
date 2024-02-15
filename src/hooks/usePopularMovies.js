import { useDispatch, useSelector } from "react-redux"
import { options } from "../utils/constants"
import {addPopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const usePopularMovies = () => {
  const dispatch = useDispatch()
  
  const popularMovies=useSelector(store=>store.movies.popularMovies)

    const getPopularMovies = async() => {
      const data = await fetch("https://api.themoviedb.org/3/movie/popular", options)
      
      const json = await data.json()
      
    
  
      dispatch(addPopularMovies(json.results))
      
    }
  
    useEffect(() => {
      !popularMovies && getPopularMovies()
    }, [])
}


export default usePopularMovies