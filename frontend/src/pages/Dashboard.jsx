// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import SalesMetrics from '../components/cards/SalesMetrics';
import InventoryMetrics from '../components/cards/InventoryMetrics';
import CustomerMetrics from '../components/cards/CustomerMetrics';
import OrderMetrics from '../components/cards/OrderMetrics';
import FinancialOverview from '../components/cards/FinancialOverview';

import SalesChart from '../components/charts/SalesChart';
import PaymentMethodPie from '../components/charts/PaymentMethodPie';
import TopProductsChart from '../components/charts/TopProductsChart';
import InventoryBar from '../components/charts/InventoryBar';
import {
  fetchSalesMetrics,
  fetchCustomerMetrics,
  fetchOrderMetrics,
  fetchInventoryMetrics,
  fetchFinancialOverview,
  fetchTopProducts,
  fetchPaymentBreakdown,
  fetchTimeTrends,
  fetchLowStock,
} from "../api/dashboardAPI";
const Dashboard = () => {
  const [salesData, setSalesData] = useState(null);
  const [customerData, setCustomerData] = useState(null);
  const [orderData, setOrderData] = useState(null);
  const [inventoryData, setInventoryData] = useState(null);
  const [financialData, setFinancialData] = useState(null);
  const [topProducts, setTopProducts] = useState([]);
  const [paymentBreakdown, setPaymentBreakdown] = useState([]);
  const [timeTrends, setTimeTrends] = useState([]);
  const [lowStockAlerts, setLowStockAlerts] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [
          sales,
          customers,
          orders,
          inventory,
          financial,
          top,
          payments,
          trends,
          lowStock,
        ] = await Promise.all([
          fetchSalesMetrics(),
          fetchCustomerMetrics(),
          fetchOrderMetrics(),
          fetchInventoryMetrics(),
          fetchFinancialOverview(),
          fetchTopProducts(),
          fetchPaymentBreakdown(),
          fetchTimeTrends(),
          fetchLowStock(),
        ]);

        setSalesData(sales.data);
        setCustomerData(customers.data);
        setOrderData(orders.data);
        setInventoryData(inventory.data);
        setFinancialData(financial.data);
        setTopProducts(top.data);
        setPaymentBreakdown(payments.data);
        setTimeTrends(trends.data);
        setLowStockAlerts(lowStock.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchAll();
  }, []);
  
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Supermarket Dashboard</h1>

      {/* 🔷 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <SalesMetrics data={salesData}/>
        <CustomerMetrics data={customerData} />
        <OrderMetrics data={orderData} />
        <InventoryMetrics data={inventoryData}  />
        <FinancialOverview data={financialData}/>
      </div>

      {/* 📊 Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Sales Over Time</h2>
          <SalesChart ata={timeTrends}/>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Payment Method Breakdown</h2>
          <PaymentMethodPie data={paymentBreakdown}/>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Top Selling Products</h2>
          <TopProductsChart 
          topProducts={topProducts}
          />
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Inventory by Category</h2>
          <InventoryBar 
          inventoryData={inventoryData}
          lowStockAlerts={lowStockAlerts}
          
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
