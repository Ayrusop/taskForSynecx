import React, { useEffect, useState } from 'react';
import { fetchLowStock } from '../../api/dashboardAPI';

const LowStockTable = () => {
  const [lowStock, setLowStock] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchLowStock().then(setLowStock);
    setLoading(false);
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="pb-2">Product</th>
            <th className="pb-2">Stock Left</th>
          </tr>
        </thead>
        <tbody>
          {lowStock.map((item) => (
            <tr key={item.id} className="border-b last:border-b-0">
              <td className="py-2 text-gray-800">{item.name}</td>
              <td className="py-2 text-red-600 font-medium">{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LowStockTable;
