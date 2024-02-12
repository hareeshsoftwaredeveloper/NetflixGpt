import React from 'react'
import { posterCDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
      <div className='w-32 mr-2'>
          <img className="rounded-sm" alt='movie_card' src={ posterCDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard