import React, { useEffect, useState } from 'react';
import { getSalesByCategory } from '../../api/dashboardAPI';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#60a5fa', '#facc15', '#34d399', '#f472b6', '#a78bfa', '#f87171'];

const SalesByCategoryPie = () => {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSalesByCategory = async () => {
      try {
        const result = await getSalesByCategory();
        const formatted = result.map(item => ({
          name: item.category,
          value: item.totalSales
        }));
        setData(formatted);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching category sales:', err);
      }
    };

    fetchSalesByCategory();
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SalesByCategoryPie;
