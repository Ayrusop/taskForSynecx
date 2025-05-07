import React, { useState } from "react";
import SalesMetrics from '../components/cards/SalesMetrics';
import InventoryMetrics from '../components/cards/InventoryMetrics';
import CustomerMetrics from '../components/cards/CustomerMetrics';
import OrderMetrics from '../components/cards/OrderMetrics';

import PaymentMethodPie from '../components/charts/PaymentMethodPie';
import TopProductsChart from '../components/charts/TopProductsChart';

import SalesByCategoryPie from '../components/charts/SalesByCategoryPie';
import SalesTrendsChart from '../components/charts/SalesTrendsChart';
import PopularCombosChart from '../components/charts/PopularCombosChart';

import LowStockTable from "../components/cards/LowStockTable";
import PeakOrderTimesChart from "../components/charts/PeakOrderTimesChart";
import ExpensesChart from "../components/charts/ExpensesPie";
import ProductMovementChart from "../components/charts/ProductMovementChart";
import { Menu, X } from "lucide-react"; // using lucide-react for icons
import ProductListTable from "../components/cards/ProductListTable";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const navigationLinks = ["Dashboard", "Orders", "Products", "Reports", "Settings", "Logout"];

  return (
    <div className="flex min-h-screen bg-secondary">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-0'} bg-primary2 shadow-md overflow-hidden`} >
        <div className="flex items-center justify-between p-4 ">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="rounded-full w-10 h-10"
            />
            <div className="font-semibold text-white hidden md:block">John Doe</div>
          </div>
          <button onClick={toggleSidebar} className="md:hidden block">
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="p-4 space-y-4">
          {navigationLinks.map((link, index) => (
            <li key={index} className="text-white hover:text-primary font-medium cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 transition-all duration-300">
        {/* Top Bar */}
        <div className="bg-secondary text-white flex items-center p-4 shadow justify-between md:justify-center mt-2">
          <button onClick={toggleSidebar} className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-3xl font-bold mb-6 text-white text-center">Supermarket Dashboard</h1>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* 🔷 Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
            <SalesMetrics />
            <CustomerMetrics />
            <OrderMetrics />
            <InventoryMetrics />
          </div>

          {/* 📊 Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Product Table"><ProductListTable /></ChartCard>
            <ChartCard title="Sales Over Time"><SalesTrendsChart /></ChartCard>
            <ChartCard title="Payment Method Breakdown"><PaymentMethodPie /></ChartCard>
            <ChartCard title="Top Selling Products"><TopProductsChart /></ChartCard>
            <ChartCard title="Sales by Category"><SalesByCategoryPie /></ChartCard>
            <ChartCard title="Peak Order Times"><PeakOrderTimesChart /></ChartCard>
            <ChartCard title="Popular Product Combos"><PopularCombosChart /></ChartCard>
            <ChartCard title="Low Stock Table"><LowStockTable /></ChartCard>
            <ChartCard title="Expense Chart"><ExpensesChart /></ChartCard>
            <ChartCard title="Product Movement (Fast vs Slow)"><ProductMovementChart /></ChartCard>
            
          </div>
        </div>
      </div>
    </div>
  );
};

const ChartCard = ({ title, children }) => (
  <div className="bg-white p-4 rounded-xl shadow">
    <h2 className="text-xl font-semibold mb-4 text-gray-700">{title}</h2>
    {children}
  </div>
);

export default Dashboard;
