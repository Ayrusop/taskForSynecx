import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { fetchGroupedExpenses } from '../../api/dashboardAPI';

// Color palette for pie slices
const COLORS = [
  '#60a5fa', '#facc15', '#34d399', '#f472b6', 
  '#a78bfa', '#f87171', '#fb923c', '#c084fc', 
  '#4ade80', '#fda4af'
];

const ExpensesChart = () => {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchGroupedExpenses().then(setData);
    setLoading(false);
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

export default ExpensesChart;
