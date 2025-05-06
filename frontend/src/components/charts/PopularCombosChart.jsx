import React, { useEffect, useState } from 'react';
import {getPopularCombos} from '../../api/dashboardAPI';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const PopularCombosChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPopularCombos = async () => {
      try {
        const response = await getPopularCombos();
        // console.log("response:", response);
        const formatted = response.popularProducts.map(item => ({
          combo: item.product, // renamed key still works for XAxis label
          count: parseInt(item.count, 10)
        }));
        setData(formatted);
      } catch (error) {
        console.error('Error fetching popular combos:', error);
      }
    };
  
    fetchPopularCombos();
  }, []);
  

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="combo" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#38bdf8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopularCombosChart;
