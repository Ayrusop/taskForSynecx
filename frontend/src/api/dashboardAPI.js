import axios from "axios";


const baseURL = "http://localhost:5000/api";


// Sales Metrics

export const fetchSalesMetrics = async () => {
    const response = await axios.get(`${baseURL}/sales/summary`);
    return response.data;
    //   console.log(response.data)
};

export const getTopProducts = async () => {
    const response = await axios.get(`${baseURL}/sales/top-products`);
    return response.data;
};
export const getSalesByCategory = async () => {
    const response = await axios.get(`${baseURL}/sales/by-category`);
    return response.data;
};
export const getSalesTimeTrends = async () => {
    const response = await axios.get(`${baseURL}/sales/time-trends`);
    return response.data;
};
export const getPaymentBreakdown = async () => {
    const response = await axios.get(`${baseURL}/sales/payment-methods`);
    return response.data;
};
export const getInventory = async () => {
    const response = await axios.get(`${baseURL}/sales/by-category`);
    return response.data;
};

export const getPopularCombos = async () => {
    const response = await axios.get(`${baseURL}/orders/popular-combos`);
    return response.data;
  };
export const getPeakOrderTimes = async () => {
    const response = await axios.get(`${baseURL}/orders/peak-times`);
    return response.data;
  };
// // Customer Metrics
// export const fetchCustomerMetrics = () => API.get("/customers");

// // Order Metrics
// export const fetchOrderMetrics = () => API.get("/orders");

// // Inventory Analytics
// export const fetchInventoryMetrics = () => API.get("/inventory");

// // Financial Overview
// export const fetchFinancialOverview = () => API.get("/financials");

// // Top Products
// export const fetchTopProducts = () => API.get("/products/top");

// // Sales by Payment Method
// export const getPaymentBreakdown = () => API.get("/sales/payment-methods");

// // Time-based sales data
// export const fetchTimeTrends = () => API.get("/sales/trends");

// // Low Stock Alerts
// export const fetchLowStock = () => API.get("/inventory/low-stock");
