import React from 'react'
import { useNavigate } from 'react-router-dom'

function FoodPage() {
  
  const navigate = useNavigate()

  return (
    <div className=''>
      <div className=''>
        <button className='border bg-paleOrange rounded-lg p-3'onClick={()=>navigate('/add-product')} >Add Food</button>
      </div>
    </div>
  )
}

export default FoodPage