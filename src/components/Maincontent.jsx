import React, { useEffect, useState } from 'react'
import ReciepeSingle from './resuable/ReciepeSingle'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Maincontent = () => {
  const [bookmark, setBookmark] = useState(true);
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(false);

  const {id} = useParams();




  useEffect(()=>{
    const fetdata = async()=>{
      try {
        setLoading(true)
        const {data} = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        const {recipe} = data.data;

        const dataInformation = {
          id : recipe.id,
          title: recipe.title,
          cookingTime : recipe.cooking_time,
          imageUrl : recipe.image_url,
          ingredients: recipe.ingredients,
          publisher: recipe.publisher,
          servings : recipe.servings,
          url : recipe.source_url
        }

        setFood(dataInformation);
        setLoading(false);
        

      } catch (error) {

        console.log(error);
        setLoading(false);
      }
    }

    fetdata();

  },[id])

  if(!food) return <h1>Loading...</h1>

  return (
    <div className='grow bg-slate-50 px-4 py-2'>
      
      <div className='relative'>

    <img 
    className='w-full h-[20rem] object-cover'
    src={food.imageUrl} alt="" />
    <span className='mygradient flex w-[50%] mx-auto py-2 text-2xl px-10 text-white text-center shadow-md capitalize rounded-lg'>
{food.title}
   
    </span>

    <div className='mt-8 flex items-center
     bg-slate-100 px-10 py-5 rounded-lg shadow-sm justify-between mx-auto w-[80%]'>
    <div className='flex items-center flex-row space-x-4'>
      <span className='flex'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-500 mr-4">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
</svg>
<span className='text-pink-500 text-md font-semibold uppercase'> {`${food.cookingTime} MINUTES`}</span>
</span>
<span className='flex'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-500 mr-4">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>

<span className='text-pink-500 text-md font-semibold uppercase'>{` ${food.servings} serving`}</span>
</span>


    </div>

    <div className='mygradient w-[3.5rem] h-[3.5rem] rounded-full shadow-md cursor-pointer flex justify-center items-center' onClick={()=> setBookmark(!bookmark)}> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${bookmark ? 'text-pink-500' : 'text-white' } `}>
  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
</svg>

    </div>

    </div>

</div>
<div className='mt-8 mx-0  bg-slate-100 p-4 '>
<h1 className='text-xl text-pink-500 uppercase text-center font-semibold mb-8'>RECIPE INGREDIENTS</h1>
{food.ingredients.map((items,ind)=>{
 return <ReciepeSingle key={ind} leftValue={`${items.quantity == null ? `` : items.quantity } ${items.unit}`} rightValue={items.description} />
})}



</div>


<div className='mt-8 mx-0  bg-slate-100 p-4 '>
<h1 className='text-xl text-pink-500 uppercase text-center font-semibold mb-8'>HOW TO COOK</h1>

    <p className='text-md font-light text-center w-[60%] mx-auto leading-relaxed mb-4'>This recipe was carefully designed and tested by 
     <span className='text-pink-500 font-semibold'> Closet Cooking</span>. 
      Please check out directions at their website.</p>
<div className='flex justify-center m-6'>

<Link to={food.url} className='flex items-center justify-center mygradient px-8 py-4 shadow-md rounded-xl text-white font-semibold '>
<span className='mr-4'>DIRECTIONS </span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>


    </Link>


</div>


</div>


    </div>
  )
}

export default Maincontent