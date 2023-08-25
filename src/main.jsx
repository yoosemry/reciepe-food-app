import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx';

import GlobalProvider from './content/ContentApp'


const routPages = createBrowserRouter([
  {
    path : '/',
    element: <App/>,
    Children : [
      {
        index : true,
        element : <Home/>

      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/home',
        element : <Home/>
      }

    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
    <RouterProvider router={routPages} />
    </GlobalProvider>
    

  </React.StrictMode>,
)
