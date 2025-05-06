import React, { useEffect, useState } from 'react';
import axios from "axios";

const LowStockTable = () => {
  const [lowStock, setLowStock] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/inventory/low-stock?threshold=50')
      .then(res => setLowStock(res.data.lowStock))
      .catch(err => console.error('Failed to fetch low stock data', err));
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Low Stock Products</h3>
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
