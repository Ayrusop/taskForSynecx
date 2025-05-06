import React, { useEffect, useState } from 'react';
import {getPeakOrderTimes} from '../../api/dashboardAPI';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PeakOrderTimesChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPeakOrderTimes = async () => {
      try {
        const response = await getPeakOrderTimes();
        console.log(response)
        setData(response);
      } catch (error) {
        console.error('Failed to load peak order times', error);
      }
    };

    fetchPeakOrderTimes();
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="orderCount" stroke="#34d399" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PeakOrderTimesChart;
