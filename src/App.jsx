import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { AllRouter } from './router/AllRouter'

const App = () => {
  return (
    <div>
      <h1>
        <RouterProvider router={AllRouter}/>
      </h1>
    </div>
  )
}

export default App