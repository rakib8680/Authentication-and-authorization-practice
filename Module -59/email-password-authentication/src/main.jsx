import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import Login from './components/login'
import Register from './components/register'
import './index.css'


const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path: 'login',
        element : <Login></Login>
      },
      {
        path : 'register',
        element : <Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
