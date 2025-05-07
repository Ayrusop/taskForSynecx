import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchInventoryMovementData } from '../../api/dashboardAPI';

const ProductMovementChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchInventoryMovementData().then(setData);
    setLoading(false);
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
     
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="fastSold" fill="#4ade80" name="Fast Moving" />
          <Bar dataKey="slowSold" fill="#f87171" name="Slow Moving" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductMovementChart;
