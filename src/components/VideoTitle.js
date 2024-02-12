import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
      <div className='w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black'>
          <h1 className='text-6xl font-bold'>{title}</h1>
          <p className='py-6 text-[14px] w-1/4'>{overview}</p>
          <div className=''>
              <button className=' bg-white text-black font-bold  p-2 pb-3 px-8 text-xl rounded-lg hover:bg-opacity-80'> ▶Play</button>
              <button  className='mx-2 bg-gray-500 text-white pb-3 p-2 px-8 text-xl  rounded-lg hover:bg-opacity-90'>ℹ️ More Info</button>
          </div>
    </div>
  )
}

export default VideoTitle