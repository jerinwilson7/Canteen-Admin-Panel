import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

function Layout() {
    return (
        <div className='flex flex-row bg-neutral-100 w-screen h-screen overflow-hidden'>
            <div className=''>
                <SideBar />
            </div>
            <div>header</div>
            <div>{<Outlet />}</div>
        </div>
    )
}

export default Layout
