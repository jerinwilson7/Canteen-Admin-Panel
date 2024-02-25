import axios from 'axios'
import React, { useEffect } from 'react'
import { server } from '../../server'



function Users() {

    useEffect(() => {
        fetchUsers();
    }, []);




    const fetchUsers = async () => {

        const response = await axios.get(`${server}/admin/all-users`);
        console.log("response")
        console.log(response)
    }

    return (
        <div>
            Basil69
        </div>
    )
}

export default Users
