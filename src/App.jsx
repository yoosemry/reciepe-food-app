import React from 'react'
import { Outlet } from 'react-router-dom'
import useApp from './hook/useApp'

const App = () => {

  const {addNewItem} = useApp();

 addNewItem();
  
  return (
    <div className='text-red-300 m-2 p-3 text-center w-2 text-black'>
      <h1>header</h1>

      <Outlet/>

      <h1>footer</h1>
    </div>
  )
}

export default App