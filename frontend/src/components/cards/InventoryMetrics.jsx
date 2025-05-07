import React, { useEffect, useState } from 'react';
import { fetchInventoryMovement } from '../../api/dashboardAPI';

const InventoryMetrics = () => {
  const [metrics, setMetrics] = useState({
    top: '-',
    low: '-',
    turnover: '-',
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchInventoryMovement().then(setMetrics);
    setLoading(false);
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <div className="bg-primary3 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">Inventory Analytics</h3>
      <p>Top Product: <b>{metrics.top}</b></p>
      <p>Low Movement Items: <b>{metrics.low}</b></p>
      <p>Turnover Rate: <b>{metrics.turnover}</b></p>
    </div>
  );
};

export default InventoryMetrics;
