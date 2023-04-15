import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children : [
      {
        path : '/',
        element :<Home></Home>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path  : '/registration',
        element : <Registration></Registration>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
