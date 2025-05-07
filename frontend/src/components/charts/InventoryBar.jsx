import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import {getInventory} from '../../api/dashboardAPI';

const InventoryBar = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchInventoryByCategory = async () => {
      try {
        const response = await getInventory()
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching inventory category data:', error);
      }
    };
 
    fetchInventoryByCategory();
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip formatter={(value) => `₹${value}`} />
        <Bar dataKey="totalSales" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default InventoryBar;
