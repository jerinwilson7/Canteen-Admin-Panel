import React from 'react'
import {  OrderTable, } from '../Components'

function OrdersPage() {
  return (
    <div className='flex flex-1 flex-col'>
    <div className='flex items-center justify-center mt-2' >
      <h1 className='font-semibold text-2xl text-chineseBlack font-Roboto'>Orders</h1>
    </div>
    <div className='flex  gap-4 m-2'>
      <OrderTable/>

    </div>
  </div>   )
}

export default OrdersPage