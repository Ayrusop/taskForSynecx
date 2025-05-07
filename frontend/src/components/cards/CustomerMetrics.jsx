import React, { useEffect, useState } from 'react';
import { fetchCustomerMetrics } from '../../api/dashboardAPI';

const CustomerMetrics = () => {
  const [data, setData] = useState({
    totalCustomers: 0,
    newCustomers: 0,
    returningCustomers: 0,
    avgVisitsPerCustomer: 0,
    avgSpendPerCustomer: 0
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCustomerMetrics().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <div className="bg-primary1 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">Customer Insights</h3>
      <p>Total Customers: <b>{data.totalCustomers}</b></p>
      <p>New vs Returning: <b>{data.newCustomers} / {data.returningCustomers}</b></p>
      <p>Avg Visits/Customer: <b>{data.avgVisitsPerCustomer}</b></p>
      <p>Avg Spend: <b>₹{data.avgSpendPerCustomer}</b></p>
    </div>
  );
};

export default CustomerMetrics;
