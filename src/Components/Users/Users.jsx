import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../../server'
import DataTable from 'react-data-table-component'
import { Loader } from 'lucide-react'



function Users() {

    const [count, setCount] = useState(0)
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {

        const result = data.filter((user) => {
            return user.name.toLowerCase().match(search.toLocaleLowerCase())
        })
        setFilter(result)

    }, [search, data])

    const fetchUsers = async () => {

        const response = await axios.get(`${server}/admin/all-users`);
        const userCount = response.data.length;
        setCount(userCount)

        const userData = response.data.map(user => {
            return {
                id: user._id,
                name: user.name,
                email: user.email,
                createAt: user.createdAt
            }
        })
        setData(userData)
        setFilter(userData)
        setLoading(false)

    }

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,

        },
        {
            name: 'Customer',
            selector: row => row.name,
            sortable: true,


        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Created At',
            selector: row => row.createAt,
            sortable: true
        },

    ];

    return (
        <div className='flex-1 bg-white pt-3 px-4 border border-gray-200-200 rounded-sm'>
            <div className="flex-row space-x-3">

                <strong className='text-gray-700 font-medium'>All Users</strong>
                <strong className='text-seaGreen font-medium'>{count}</strong>
            </div>
            <div className="border-x border-gray-200 rounded-sm mt-3">

                <DataTable
                    columns={columns}
                    data={filter}
                    progressPending={loading}
                    progressComponent={<Loader className=' flex justify-center items-center' size={50} />}
                    columnFilter
                    subHeader
                    subHeaderComponent={
                        <input type='text'
                            placeholder='Search item'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className='border-2 p-2' />
                    }
                    subHeaderAlign='right'
                />
            </div>
        </div>
    )
}

export default Users
