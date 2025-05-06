import React, { useEffect, useState } from 'react';
import axios from "axios";

const InventoryMetrics = () => {
  const [metrics, setMetrics] = useState({
    top: '-',
    low: '-',
    turnover: '-',
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/inventory/movement')
      .then(res => {
        const { fastMoving, slowMoving } = res.data;
        const topProduct = fastMoving[0]?.Product?.name || '-';
        const slowCount = slowMoving.length || '-';

        setMetrics({
          top: topProduct,
          low: slowCount,
          turnover: `${fastMoving.length}/${slowMoving.length}`
        });
      })
      .catch(err => console.error('Inventory movement error', err));
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">Inventory Analytics</h3>
      <p><strong>Top Product:</strong> {metrics.top}</p>
      <p><strong>Low Movement Items:</strong> {metrics.low}</p>
      <p><strong>Turnover Rate:</strong> {metrics.turnover}</p>
    </div>
  );
};

export default InventoryMetrics;
