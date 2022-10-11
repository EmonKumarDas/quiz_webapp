import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistic = () => {
    const statistic = useLoaderData();
let newdata = statistic.data;
console.log(newdata);
    return (
        <div className="lg:mx-[30%] my-4 md:mx-[25%]">
            <BarChart width={400} height={400} data={newdata}>
            <XAxis dataKey="name" />
            <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#D884D8" />
        </BarChart>  
        </div>
    );
};

export default Statistic;