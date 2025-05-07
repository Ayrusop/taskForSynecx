import React, { useEffect, useState } from 'react';
import { getSalesTimeTrends } from '../../api/dashboardAPI';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const SalesTrendsChart = () => {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const result = await getSalesTimeTrends();
        // console.log(result)
        const formatted = result.map(item => ({
          date: item.saleDate,
          sales: item.totalSales,
        }));
        setData(formatted);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching time trends:', error);
      }
    };

    fetchTrends();
    
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesTrendsChart;
