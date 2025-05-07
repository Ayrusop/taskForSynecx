import React, { useEffect, useState } from 'react';
import {getPeakOrderTimes} from '../../api/dashboardAPI';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PeakOrderTimesChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPeakOrderTimes = async () => {
      try {
        const response = await getPeakOrderTimes();
  
        // Convert 24-hour to 12-hour format with AM/PM
        const formattedData = response.map(item => {
          const hour = parseInt(item.hour, 10);
          const ampm = hour >= 12 ? 'PM' : 'AM';
          const displayHour = hour % 12 === 0 ? 12 : hour % 12;
          return {
            ...item,
            hour: `${displayHour} ${ampm}`
          };
        });
        
        setData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load peak order times', error);
      }
    };
    
    fetchPeakOrderTimes();
  }, []);
  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="hour"/>
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="orderCount" stroke="#34d399" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PeakOrderTimesChart;
