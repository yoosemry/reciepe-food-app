import React, { useState } from 'react'
import useApp from '../hook/useApp'
import { Link } from 'react-router-dom';

const Header = () => {

  const {state , searchFun}= useApp();
  const [search , setSearch] = useState('')

  const submitHandle = (e)=>{
    e.preventDefault();
    setSearch(search);
    searchFun(search);
    setSearch('');
  }
  return (
    <div className='w-full bg-slate-50  rounded-t-lg p-4 text-black flex justify-between items-center'>

    <Link to={"/"} >
      <img src="https://forkify-v2.netlify.app/logo.09084f39.png" alt="logo" className='h-[3rem] object-cover block cursor-pointer' />
     
    </Link>
    <div className='bg-white px-4 py-2 relative flex justify-center text-center rounded-full'>
      <form onSubmit={submitHandle}>
      <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='pizza' className='px-4 w-[350px] outline-none text-xl' /> 
        <button className='bg-yellow-400 absolute top-0 right-0 h-full  text-white py-2 px-8 text-xl rounded-full'>search</button>
      </form>
   
    
    </div>

    
    <div className='flex items-center space-x-8 text-xl '>
      {/* dark mode feuture */}
{/* <span className='w-[3rem] h-[3rem] bg-white shadow rounded-full flex justify-center items-center  cursor-pointer duration-200 ease-in text-pink-500  hover:text-pink-700'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
</span> */}


<Link to={'/bookmark'} className='w-[3rem] h-[3rem] bg-white shadow rounded-full flex justify-center items-center cursor-pointer duration-200 ease-in text-pink-500  hover:text-pink-700'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
</Link>
      
    </div>


    </div>
  )
}

export default Header