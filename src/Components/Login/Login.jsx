import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState } from 'react'
import { server } from '../../server'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("btn clicked")
        console.log(server)

        await axios.post(`${server}/admin/login`, {
            email,
            password
        }).then((response) => {
            if (response.data.stat === true) {
                navigate('/')
            }
        })

    }

    return (
        <div className='flex items-center justify-center bg-seaGreen h-screen'>
            <div className="bg-white w-96 p-6 shadow-lg rounded-lg">
                <h1 className='text-gray-900 text-center font-semibold block text-3xl'>
                    <FontAwesomeIcon className='inline-block mr-2' icon={faUser} />
                    Login
                </h1>
                <hr className='mt-2' />

                <form action="" className='space-y-6' onSubmit={handleSubmit}>
                    <div className="mt-3 relative">
                        <label htmlFor="email" className='text-base block mb-3'> Email </label>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete='email'
                            placeholder='Enter your mail'
                            required className='w-full text-base border px-2 py-2 focus:outline-none focus:ring-1 hover:border-seaGreen' />
                    </div>

                    <div className="mt-3 relative">
                        <label htmlFor="password" className='text-base block mb-3'> Password </label>
                        <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete='password'
                            placeholder='Enter your password'
                            required className='w-full text-base border px-2 py-2 focus:outline-none focus:ring-1 hover: bg-transparent border-seaGreen' />
                    </div>

                    <div className=" flex mt-5 items-center justify-center">
                        <button className="bg-seaGreen rounded-lg px-5 py-3  w-1/2 font-medium hover:bg-green-400">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
