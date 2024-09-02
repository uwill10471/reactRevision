import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import{Home,Contact,About} from './index.js'
import User from './components/User/User.jsx'
import Github ,{gitLoader} from './components/Github/Github.jsx'

// 1stway to route
// const router = createBrowserRouter([
//   {
//     path: '/',
//      element: <App />,
//      children: [
//       {
//         path: "",
//         element: <Home />
//       } , {
//         path: "about",
//         element: <About />
//       } ,{
//         path:"contact",
//         element: <Contact/>
//       }
//      ]
//   }
// ])

// 2nd way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
       loader={gitLoader}
       path='github' 
       element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
