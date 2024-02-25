import React from 'react';
import { OrderTable } from '../Components';

function OrdersPage() {
  return (

    <div className='flex flex-col gap-4 w-full'>
      <OrderTable />
    </div>
  );
}

export default OrdersPage;
