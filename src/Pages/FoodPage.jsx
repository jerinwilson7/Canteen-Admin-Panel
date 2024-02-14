import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AllFood } from '../Components'

function FoodPage() {
  
  const navigate = useNavigate()

  return (
    <div className='flex flex-grow-1 flex-col  '>
      <div className='flex items-end justify-end mt-2'>
        <button className='p-3 border rounded-lg bg-paleOrange'onClick={()=>navigate('/add-food')} >Add Food</button>
      </div>
      <div className='flex flex-row w-full gap-4 m-2'>

        <AllFood/>
      </div>
    </div> 
  )
}

export default FoodPage