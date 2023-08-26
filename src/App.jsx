import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useApp from './hook/useApp'
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {

  useEffect(()=>{
    window.document.title = 'Food App';
  },[]);


  const {addNewItem} = useApp();

 addNewItem();
  
  return (

    <div className="h-full xl:max-w-5xl m-0 xl:mx-auto xl:my-10 shadow-sm bg-slate-400">
      <Header/>
      <Outlet/>
      <Footer/>
</div>
  )
}

export default App