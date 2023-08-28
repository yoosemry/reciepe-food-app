import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useApp from '../hook/useApp';

const Side = () => {
  const [foods, setFoods] = useState(null);
  const [loading, setLoading] = useState(false);
  const {state} = useApp();

  console.log(state.search)
   let {id} = useParams();
  
  const navicate = useNavigate();

  useEffect(()=>{

    const searchDataFetch = async(search)=>{
      try {
        setLoading(true)
        const {data} = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
       
         let {recipes} = data.data;
       
         if(recipes.length < 1 ){
          setLoading(false)
          setFoods('');
         }else{

          setFoods(recipes);
          setLoading(false)
         }
          


      } catch (error) {
        setLoading(false)
        console.log(error);

      }
    }

    searchDataFetch(state.search);


  },[state]);

  if(!foods) return <h1>loading</h1>

  return (

    <div className=' sm:hidden lg:flex grow-0 w-[20rem]  bg-white'>

      <div className='flex  flex-col w-full my-4'>
      {foods.map((myItems,index)=>{
    return(

      <div key={index} onClick={()=>  navicate(`/${myItems.id}`)} className='hover:bg-slate-50 duration-200 ease-in h-fit w-full flex items-center cursor-pointer'>
      <img
      className='h-[70px] w-[80px] px-4 py-2 rounded-[50%] object-cover'
       src={myItems.image_url} alt={myItems.title} />
      <div>
        <p className=' text-pink-500 font-semibold uppercase w-[80%] truncate'>{myItems.title}</p>
        <p className='text-gray-300 text-xs'>{myItems.publisher}</p>
      </div>
      
      </div>
    )

})}
  




      </div>

   

    </div>
  )
}

export default Side