import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'



const data = [
    {
        "name": "January",
        "revenue": 4000,
        "expense": 2400
    },
    {
        "name": "Feb",
        "revenue": 3000,
        "expense": 1398
    },
    {
        "name": "March",
        "revenue": 6000,
        "expense": 9800
    },
    {
        "name": "April",
        "revenue": 2780,
        "expense": 3908
    },
    {
        "name": "May",
        "revenue": 5890,
        "expense": 8800
    },
    {
        "name": "June",
        "revenue": 2390,
        "expense": 3800
    },
    {
        "name": "July",
        "revenue": 7490,
        "expense": 8300
    },
    {
        "name": "August",
        "revenue": 4490,
        "expense": 5300
    },
    {
        "name": "September",
        "revenue": 3290,
        "expense": 4100
    },
    {
        "name": "October",
        "revenue": 2490,
        "expense": 3400
    },
    {
        "name": "November",
        "revenue": 3190,
        "expense": 4300
    },
    {
        "name": "December",
        "revenue": 2350,
        "expense": 3240
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
            <Bar dataKey="revenue" fill="#98df8a" />
            <Bar dataKey="expense" fill="#ff6961" />
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
