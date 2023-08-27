import React, { useState } from 'react'
import useApp from '../hook/useApp'

const Header = () => {
  const {state , searchFun}= useApp();

 


  const [search , setSearch] = useState('')

  const submitHandle = (e)=>{
    e.preventDefault();


  }
  return (
    <div className='w-full bg-slate-50  rounded-t-lg p-4 text-black flex justify-between items-center'>

    <div >
      <img src="https://forkify-v2.netlify.app/logo.09084f39.png" alt="logo" className='h-[3rem] object-cover block cursor-pointer' />
     
    </div>
    <div className='bg-white px-4 py-2 relative flex justify-center text-center rounded-full'>
      <form onSubmit={submitHandle}>
    
      <input type="text" name='search' 
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
      placeholder='search' className='px-4 w-[350px] outline-none text-xl' /> 
 
    <button type='submit' className='bg-yellow-400 absolute top-0 right-0 h-full  text-white py-2 px-8 text-xl rounded-full'>search</button>
      </form>
    
    </div>
    <div>bookmark</div>


    </div>
  )
}

export default Header