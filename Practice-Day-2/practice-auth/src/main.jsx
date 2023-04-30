import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import router from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
)
