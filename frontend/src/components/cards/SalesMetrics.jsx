// src/components/cards/SalesMetrics.jsx
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
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Sales Metrics</h2>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>🗓️ <strong>Daily:</strong> ₹{data?.dailySales}</li>
        <li>📅 <strong>Weekly:</strong> ₹{data?.weeklySales}</li>
        <li>📆 <strong>Monthly:</strong> ₹{data?.monthlySales}</li>
        <li>💳 <strong>Avg. Bill value:</strong> ₹{data?.avgBillValue}</li>
        <li>💳 <strong>Total Bills:</strong> ₹{data?.totalBills}</li>
      </ul>
    </div>
  );
};

export default SalesMetrics;
