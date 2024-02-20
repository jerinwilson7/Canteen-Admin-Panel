import React from 'react'

function Dashboard() {
    return (
        <div className='flex gap-4 w-full'>

            <div className='bg-white rounded-sm border border-gray-200 p-4 flex-1 flex items-center'>customers</div>
            <div className='bg-white rounded-sm border border-gray-200 p-4 flex-1 flex items-center'>inventory</div>
            <div className='bg-white rounded-sm border border-gray-200 p-4 flex-1 flex items-center'>orders</div>
            <div className='bg-white rounded-sm border border-gray-200 p-4 flex-1 flex items-center'>revenue</div>

        </div>
    )
}

export default Dashboard
