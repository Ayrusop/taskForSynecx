import React, { useEffect, useState } from 'react';
import { fetchOrderMetrics } from '../../api/dashboardAPI';

const OrderMetrics = () => {
  const [data, setData] = useState({
    totalOrders: 0,
    avgItems: 0,
    fulfillmentTime: 0,
    cancelRate: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrderMetrics().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  

  return (
    <div className="bg-primary2 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">Sales Metrics</h3>
      <p>Total Orders: <b>{data.totalOrders}</b></p>
      <p>Avg. Items/Order: <b>{data.avgItems}</b></p>
      <p>Avg. Fulfillment Time: <b>{data.fulfillmentTime} mins</b></p>
      <p>Cancellation Rate: <b>{data.cancelRate}</b></p>
    </div>
  );
};

export default OrderMetrics;
