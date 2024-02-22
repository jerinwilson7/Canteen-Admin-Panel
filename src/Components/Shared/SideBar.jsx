import React from 'react'
import { Sidebar_Links } from '../../constants'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-green-200 hover:no-underline active:bg-green-200  rounded-sm text-base'
function SideBar() {
    return (
        <div className='flex flex-col bg-paleSilver p-4 w-60 border border-gray-200 h-screen'>
            <div className=" pb-2 flex justify-center items-center">
                <span className="font-bold block text-3xl text-raisingBlack font-Poppins">Admin</span>
                <span className="text-seaGreen font-bold text-3xl">.</span>
            </div>
            <div className='flex-1 flex flex-col py-8 gap-0.5'>
                {Sidebar_Links.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
            <div>admin</div>
        </div>
    )
}

export default SideBar


function SidebarLink({ item }) {

    const { pathname } = useLocation();

    return (
        <Link

            to={item.path}
            className={classNames(pathname === item.path ? ' from-indigo-200 to-indigo-100 text-seaGreen bg-green-200 transition duration-300 ease-in-out' : ' text-chineseBlack ', linkClass)}

        >
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )

}