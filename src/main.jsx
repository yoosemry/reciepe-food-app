import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx';

import GlobalProvider from './content/ContentApp';
import SingleFood from './pages/SingleFood.jsx'
import Bookmark from './pages/Bookmark.jsx'




const routerProvider = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/:id",
				element: <SingleFood />,
			},
			{
				path: "/bookmark",
				element: <Bookmark />,
			},
      {
				path: "/about",
				element: <About />,
			}
		],
	},
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
    <RouterProvider router={routerProvider} />
    </GlobalProvider>
    

  </React.StrictMode>,
)
