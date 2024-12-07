import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BodyContainer from './components/Container'
import HomePage from './components/sub_components/HomePage'
import CreatePost from './components/sub_components/CreatePost'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <BodyContainer/>,
      children: [
        {
          index: true, 
          element: <HomePage/>
        },
        {
          path: '/new',
          element: <CreatePost/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
