import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getPaymentBreakdown } from '../../api/dashboardAPI';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA66CC'];

const PaymentMethodPie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPaymentBreakdown = async () => {
      try {
        const response = await getPaymentBreakdown()
        // console.log("Response:", response)
        const formatted = response.map(item => ({
          name: item.method,
          value: parseFloat(item.totalAmount)
        }));
        setData(formatted);
      } catch (error) {
        console.error('Error fetching payment breakdown:', error);
      }
    };

    fetchPaymentBreakdown();
  }, []);


  return data.length > 0 ? (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  ) : (
    <p className="text-gray-500">Loading payment data...</p>
  );


};

export default PaymentMethodPie;
