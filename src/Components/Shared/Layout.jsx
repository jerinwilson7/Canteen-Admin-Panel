import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'

function Layout() {
    return (
        <div className='flex flex-row bg-neutral-100 w-screen h-screen overflow-hidden'>
            <SideBar />
            <div className='flex flex-col flex-1'>
                <Header />
                <div className='flex-1 p-4 min-h-0 overflow-auto'>
                    {<Outlet />}
                </div>
            </div>
        </div>
    )
}

export default Layout
