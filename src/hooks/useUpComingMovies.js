import { useDispatch } from "react-redux"
import { options } from "../utils/constants"
import {addUpComingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useUpComingMovies = () => {
    const dispatch=useDispatch()

    const getUpComingMovies = async() => {
      const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", options)
      
      const json = await data.json()
      
    
  
      dispatch(addUpComingMovies(json.results))
      
    }
  
    useEffect(() => {
      getUpComingMovies()
    }, [])
}


export default useUpComingMovies