import React from 'react'

const Header = () => {
  return (
    <div className='w-full bg-slate-50  rounded-t-lg p-4 text-black flex justify-between'>

    <div >
      <img src="https://forkify-v2.netlify.app/logo.09084f39.png" alt="logo" className='h-[3rem] object-cover block cursor-pointer' />
     
    </div>
    <div className='bg-white px-4 py-2 relative flex justify-center text-center rounded-full'><input type="text" placeholder='search' className='px-4 w-[350px] outline-none text-xl' /> 
    <button className='bg-yellow-400 absolute top-0 right-0 h-full  text-white py-2 px-8 text-xl rounded-full'>search</button>
    
    </div>
    <div>bookmark</div>


    </div>
  )
}

export default Header