import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/dashboard", // change if hosted elsewhere
});

// Sales Metrics
export const fetchSalesMetrics = () => API.get("/sales");

// Customer Metrics
export const fetchCustomerMetrics = () => API.get("/customers");

// Order Metrics
export const fetchOrderMetrics = () => API.get("/orders");

// Inventory Analytics
export const fetchInventoryMetrics = () => API.get("/inventory");

// Financial Overview
export const fetchFinancialOverview = () => API.get("/financials");

// Top Products
export const fetchTopProducts = () => API.get("/products/top");

// Sales by Payment Method
export const fetchPaymentBreakdown = () => API.get("/sales/payment-methods");

// Time-based sales data
export const fetchTimeTrends = () => API.get("/sales/trends");

// Low Stock Alerts
export const fetchLowStock = () => API.get("/inventory/low-stock");
