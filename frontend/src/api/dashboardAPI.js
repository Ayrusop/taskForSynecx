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
export const getAllProducts = async () => {
    const response = await axios.get(`${baseURL}/product/all-products`);
    return response.data;
    
  };


// // Customer Metrics
export const fetchCustomerMetrics = async () => {
    try {
        const [
            totalCustomersRes,
            typeStatsRes,
            avgVisitsRes,
            avgSpendRes
        ] = await Promise.all([
            axios.get(`${baseURL}/customers/total`),
            axios.get(`${baseURL}/customers/type-stats`),
            axios.get(`${baseURL}/customers/visit-frequency`),
            axios.get(`${baseURL}/customers/avg-spend`),
        ]);

        return {
            totalCustomers: totalCustomersRes.data.totalCustomers || 0,
            newCustomers: typeStatsRes.data.newCustomers || 0,
            returningCustomers: typeStatsRes.data.returningCustomers || 0,
            avgVisitsPerCustomer: parseFloat(avgVisitsRes.data.avgVisitsPerCustomer) || 0,
            avgSpendPerCustomer: parseFloat(avgSpendRes.data.avgSpendPerCustomer) || 0,
        };
    } catch (error) {
        console.error('Failed to load customer data', error);
        return {
            totalCustomers: 0,
            newCustomers: 0,
            returningCustomers: 0,
            avgVisitsPerCustomer: 0,
            avgSpendPerCustomer: 0,
        };
    }
};

// // Order Metrics
export const fetchOrderMetrics = async () => {
    try {
        const [countRes, avgRes, timeRes, cancelRes] = await Promise.all([
            axios.get(`${baseURL}/orders/counts`),
            axios.get(`${baseURL}/orders/avg-items`),
            axios.get(`${baseURL}/orders/fulfillment-time`),
            axios.get(`${baseURL}/orders/cancellation-rate`),
        ]);

        return {
            totalOrders: parseInt(countRes.data[0]?.orderCount || 0),
            avgItems: avgRes.data.avgItemsPerOrder || 0,
            fulfillmentTime: timeRes.data.avgFulfillmentTimeMinutes || 0,
            cancelRate: cancelRes.data.cancellationRate || 0,
        };
    } catch (err) {
        console.error('Failed to load order summary data', err);
        return {
            totalOrders: 0,
            avgItems: 0,
            fulfillmentTime: 0,
            cancelRate: 0,
        };
    }
};

export const fetchInventoryMovement = async () => {
    try {
        const res = await axios.get(`${baseURL}/inventory/movement`);
        const { fastMoving, slowMoving } = res.data;

        const topProduct = fastMoving[0]?.Product?.name || '-';
        const slowCount = slowMoving.length || '-';
        const turnover = `${fastMoving.length}/${slowMoving.length}`;

        return {
            top: topProduct,
            low: slowCount,
            turnover,
        };
    } catch (err) {
        console.error('Inventory movement error', err);
        return {
            top: '-',
            low: '-',
            turnover: '-',
        };
    }
};

export const fetchLowStock = async (threshold = 50) => {
    try {
        const res = await axios.get(`${baseURL}/inventory/low-stock?threshold=${threshold}`);
        return res.data.lowStock || [];
    } catch (err) {
        console.error('Failed to fetch low stock data', err);
        return [];
    }
};

export const fetchGroupedExpenses = async () => {
    try {
        const response = await axios.get(`${baseURL}/expense/allexpense`);
        const expenses = response.data;

        // Group by type and sum the amounts
        const grouped = expenses.reduce((acc, item) => {
            acc[item.type] = (acc[item.type] || 0) + item.amount;
            return acc;
        }, {});

        // Convert to array of objects for chart or UI
        return Object.entries(grouped).map(([type, total]) => ({
            name: type,
            value: total
        }));
    } catch (error) {
        console.error('Failed to fetch expenses:', error);
        return [];
    }
};

export const fetchInventoryMovementData = async () => {
    try {
        const res = await axios.get(`${baseURL}/inventory/movement`);
        const { fastMoving, slowMoving } = res.data;

        const fastData = fastMoving.map(item => ({
            name: item.Product.name,
            fastSold: parseInt(item.totalSold),
            slowSold: 0
        }));

        const slowData = slowMoving.map(item => ({
            name: item.Product.name,
            fastSold: 0,
            slowSold: parseInt(item.totalSold)
        }));

        const allNames = [...new Set([...fastData, ...slowData].map(p => p.name))];
        return allNames.map(name => {
            const fast = fastData.find(f => f.name === name) || {};
            const slow = slowData.find(s => s.name === name) || {};
            return {
                name,
                fastSold: fast.fastSold || 0,
                slowSold: slow.slowSold || 0
            };
        });
    } catch (error) {
        console.error('Error fetching inventory movement data:', error);
        return [];
    }
};