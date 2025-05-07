import React, { useEffect, useState } from 'react';
import { getTopProducts } from '../../api/dashboardAPI';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend,
} from 'recharts';

const TopProductsChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const result = await getTopProducts();

        // Transform API data to match chart structure
        const formatted = result.map(item => ({
          name: item.Product?.name || 'Unknown',
          unitsSold: parseInt(item.totalSold),
          revenue: item.revenue,
        }));

        setChartData(formatted);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching top products:', err);
      }
    };

    fetchTopProducts();
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, bottom: 5, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="unitsSold" fill="#38bdf8" name="Units Sold" />
        <Bar dataKey="revenue" fill="#6366f1" name="Revenue (₹)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TopProductsChart;
