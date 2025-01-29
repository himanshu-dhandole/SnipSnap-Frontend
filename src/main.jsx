import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
   {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      }
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router}/>
  </StrictMode>,
)
