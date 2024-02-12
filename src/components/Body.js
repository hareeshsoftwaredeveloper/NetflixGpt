import React from 'react'
import Browse from './Browse'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from "react-router-dom"
import SignIn from './SignIn'


const Body = () => {

    
    

    const appRouter =  createBrowserRouter([
        {
            path: "/",
            element:<SignIn/>
      },
        {
            path: "/browse",
            element:<Browse/>
      }
    ])
    
   


  return (
      <div>
          <RouterProvider router={appRouter} />
    
    </div>
  )
}

export default Body