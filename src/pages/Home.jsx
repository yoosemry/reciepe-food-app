import React from 'react'
import Side from '../components/Side'
import Maincontent from '../components/Maincontent'

const Home = () => {
  return (
    <div className='flex flex-row'>

      <Side/>
      <Maincontent/>

    </div>
  )
}

export default Home