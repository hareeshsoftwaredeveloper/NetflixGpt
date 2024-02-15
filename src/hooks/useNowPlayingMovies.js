import { useDispatch, useSelector } from "react-redux"
import { options } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()
  
  const nowPlatingMovies=useSelector(store=>store.movies.nowPlatingMovies)

    const getLatestMovies = async() => {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", options)
     
      
      const json = await data.json()
      
   
  
      dispatch(addNowPlayingMovies(json.results))
      
    }
  
    useEffect(() => {
      !nowPlatingMovies && getLatestMovies()
    }, [])
}


export default useNowPlayingMovies