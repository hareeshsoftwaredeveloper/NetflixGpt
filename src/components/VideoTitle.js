import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
      <div className='w-screen aspect-video pt-[10%] md:px-24 px-6 absolute text-white bg-gradient-to-r from-black'>
          <h1 className='md:text-6xl text-2xl font-bold'>{title}</h1>
          <p className='py-6 text-[14px] w-1/4 hidden md:inline-block'>{overview}</p>
          <div className='my-4 md:m-0'>
              <button className=' bg-white text-black font-bold  md:py-2 py-1 pb-3 px-4 md:px-8 text-xl rounded-lg hover:bg-opacity-80'> ▶Play</button>
              <button  className='mx-2 hidden md:inline-block bg-gray-500 text-white pb-3 p-2 px-8 text-xl  rounded-lg hover:bg-opacity-90'>ℹ️ More Info</button>
          </div>
    </div>
  )
}

export default VideoTitle