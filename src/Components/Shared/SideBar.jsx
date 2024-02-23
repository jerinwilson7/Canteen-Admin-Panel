import React from 'react'
import { Sidebar_Links } from '../../constants'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

const linkClass = 'flex items-center gap-2 font-medium  py-2 px-3 my-1  cursor-pointer bg-opacity-50 transition duration-300 ease-in-out hover:text-seaGreen hover:bg-green-200 hover:no-underline active:bg-green-200  rounded-md text-medium'
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
            {/* <div>admin</div> */}
            <div className="mt-2 border-t flex p-3">
                <img
                    src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                    alt=""
                    className="w-10 h-10 rounded-md"
                />
                <div
                    className="
              flex justify-between items-center
              overflow-hidden transition-all w-52 ml-3"
                >
                    <div className="leading-4">
                        <h4 className="font-semibold">John Doe</h4>
                        <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar


function SidebarLink({ item }) {

    const { pathname } = useLocation();

    return (
        <Link

            to={item.path}
            className={classNames(pathname === item.path ? ' from-indigo-200 to-indigo-100 text-seaGreen bg-green-200 ' : ' text-chineseBlack ', linkClass)}

        >
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )

}