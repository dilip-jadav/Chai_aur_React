import { StrictMode,React} from 'react'
import { createRoot,Route } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About  from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, {/* githubinfoloader*/ } from './Components/Github/Github.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[ 
      {
        path:"/Home",
        element:<Home />
      },
      {
        path:"/About",
        element:<About />
      },
      {
        path:"/Contact",
        element:<Contact />
      },
      {
        path:"/User/:userid",
        element:<User />
      },
      {
        // loader:{githubinfoloader},
        path:"/github",
        element:<Github />
      }

    ]

  }
])

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path="/Home" element={<Home />} />
//       <Route path='/About' element={<About />} />
//       <Route path='/Contact' element={<Contact />} />
//       <Route path='/User/:userid' element={<User />}  /> 
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router} />  

  </StrictMode>,
)
