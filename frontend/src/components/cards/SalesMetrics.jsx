import React, { useEffect, useState } from 'react';
import { fetchSalesMetrics } from '../../api/dashboardAPI';

const SalesMetrics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSalesMetrics().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow text-gray-600">Loading sales data...</div>
    );
  }

  return (
    <div className="bg-primary p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Payment Metrics</h2>
      <p>Daily: <b>₹{data?.dailySales}</b></p>
      <p>Weekly: <b>₹{data?.weeklySales}</b></p>
      <p>Monthly: <b> ₹{data?.monthlySales}</b></p>
      <p>Avg. Bill value: <b>₹{data?.avgBillValue}</b></p>
      <p>Total Bills: <b> ₹{data?.totalBills}</b></p>
    </div>
  );
};

export default SalesMetrics;
