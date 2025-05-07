const { Customer, Order } = require('../models');
const { Op, fn, col, literal } = require('sequelize');


exports.getTotalCustomers = async (req, res) => {
    try {
        const count = await Customer.count();
        res.json({ totalCustomers: count });
    } catch (err) {
        res.status(500).json({ error: 'Failed to get total customers', details: err.message });
    }
};


exports.getCustomerTypeStats = async (req, res) => {
    try {
        const recentOrders = await Order.findAll({
            attributes: ['customerId'],
            where: {
                createdAt: {
                    [Op.gte]: literal("CURRENT_DATE - INTERVAL '30 days'")
                }
            },
            group: ['customerId']
        });

        const recentCustomerIds = recentOrders.map(order => order.customerId);

        const returningCustomers = await Order.findAll({
            attributes: ['customerId'],
            where: {
                customerId: { [Op.in]: recentCustomerIds },
                createdAt: { [Op.lt]: literal("CURRENT_DATE - INTERVAL '30 days'") }
            },
            group: ['customerId']
        });

        const returningSet = new Set(returningCustomers.map(o => o.customerId));

        const newCount = recentCustomerIds.length - returningSet.size;
        const returningCount = returningSet.size;

        res.json({ newCustomers: newCount, returningCustomers: returningCount });
    } catch (err) {
        res.status(500).json({ error: 'Failed to get customer type stats', details: err.message });
    }
};


exports.getCustomerVisitFrequency = async (req, res) => {
    try {
        const totalOrders = await Order.count();
        const totalCustomers = await Customer.count();

        const avgVisits = totalCustomers ? (totalOrders / totalCustomers).toFixed(2) : 0;

        res.json({ avgVisitsPerCustomer: avgVisits });
    } catch (err) {
        res.status(500).json({ error: 'Failed to get visit frequency', details: err.message });
    }
};


exports.getAvgSpendPerCustomer = async (req, res) => {
    try {
        const result = await Order.findAll({
            attributes: [[fn('SUM', col('totalAmount')), 'totalRevenue']]
        });

        const totalRevenue = parseFloat(result[0].get('totalRevenue')) || 0;
        const customerCount = await Customer.count();

        const avgSpend = customerCount ? (totalRevenue / customerCount).toFixed(2) : 0;

        res.json({ avgSpendPerCustomer: avgSpend });
    } catch (err) {
        res.status(500).json({ error: 'Failed to get average spend', details: err.message });
    }
};
