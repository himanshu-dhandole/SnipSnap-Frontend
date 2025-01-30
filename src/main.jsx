import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/about',
        element:<AboutPage/>
      },
      {
        path:'/signin',
        element:<SignIn/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)