import React, { useEffect, useState } from 'react';
import axios from "axios";

const OrderMetrics = () => {
  const [data, setData] = useState({
    totalOrders: 0,
    avgItems: 0,
    fulfillmentTime: 0,
    cancelRate: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [countRes, avgRes, timeRes, cancelRes] = await Promise.all([
          axios.get('http://localhost:5000/api/orders/counts'),
          axios.get('http://localhost:5000/api/orders/avg-items'),
          axios.get('http://localhost:5000/api/orders/fulfillment-time'),
          axios.get('http://localhost:5000/api/orders/cancellation-rate'),
        ]);

        setData({
          totalOrders: countRes.data.orderCount || 0,
          avgItems: avgRes.data.avgItemsPerOrder || 0,
          fulfillmentTime: timeRes.data.avgFulfillmentTimeMinutes || 0,
          cancelRate: cancelRes.data.cancellationRate || 0
        });
      } catch (err) {
        console.error('Failed to load order summary data', err);
      }
        // console.log(data)

    };

    fetchData();
  }, []);

  const cardClass = 'bg-white p-4 rounded-xl shadow w-full md:w-1/4 text-center';

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <div className={cardClass}>
        <h4 className="text-gray-600 text-sm">Total Orders</h4>
        <p className="text-xl font-semibold text-blue-600">{data.totalOrders}</p>
      </div>
      <div className={cardClass}>
        <h4 className="text-gray-600 text-sm">Avg. Items/Order</h4>
        <p className="text-xl font-semibold text-purple-600">{data.avgItems}</p>
      </div>
      <div className={cardClass}>
        <h4 className="text-gray-600 text-sm">Avg. Fulfillment Time</h4>
        <p className="text-xl font-semibold text-green-600">{data.fulfillmentTime} mins</p>
      </div>
      <div className={cardClass}>
        <h4 className="text-gray-600 text-sm">Cancellation Rate</h4>
        <p className="text-xl font-semibold text-red-600">{data.cancelRate}</p>
      </div>
    </div>
  );
};

export default OrderMetrics;
