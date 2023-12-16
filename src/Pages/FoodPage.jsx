import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AllFood } from '../Components'

function FoodPage() {
  
  const navigate = useNavigate()

  return (
    <div className='flex flex-col'>
      <div className='flex justify-end items-end mt-2'>
        <button className='border  bg-paleOrange rounded-lg p-3'onClick={()=>navigate('/add-food')} >Add Food</button>
      </div>
      <div className='flex flex-row gap-4 w-full  m-2'>

        <AllFood/>
      </div>
    </div> 
  )
}

export default FoodPage