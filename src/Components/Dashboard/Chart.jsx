import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'



const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300
    }
]


function Chart() {
    return (
        <BarChart width={730} height={250} data={data}
            margin={{
                top: 20,
                right: 10,
                left: -10,
                bottom: 0
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        // <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
        //     <strong className="text-gray-700 font-medium">Transactions</strong>
        //     <div className="mt-3 w-full flex-1 text-xs">
        //         <ResponsiveContainer width="100%" height="100%" >
        //             <BarChart
        //                 width={500}
        //                 height={300}
        //                 data={data}

        //                 margin={{
        //                     top: 20,
        //                     right: 10,
        //                     left: -10,
        //                     bottom: 0
        //                 }}
        //             >

        //                 <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
        //                 <XAxis dataKey="name" />
        //                 <YAxis />
        //                 <Tooltip />
        //                 <Legend />
        //                 <Bar dataKey="pv" fill="#0ea5e9" />
        //                 <Bar dataKey="uv" fill="#ea580c" />
        //             </BarChart>
        //         </ResponsiveContainer>
        //     </div>
        // </div>
    )
}

export default Chart
