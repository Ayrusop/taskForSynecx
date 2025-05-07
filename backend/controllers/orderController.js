const { Order, OrderItem, Product } = require('../models');
const { Op, fn, col, literal, Sequelize } = require('sequelize');


exports.getOrderCounts = async (req, res) => {
    try {
        const { period } = req.query;

        let groupFormat = 'YYYY-MM-DD'; // default: daily
        if (period === 'weekly') groupFormat = 'IYYY-IW';
        if (period === 'monthly') groupFormat = 'YYYY-MM';
        if (period === 'yearly') groupFormat = 'YYYY';

        const orders = await Order.findAll({
            attributes: [
                [Sequelize.literal(`TO_CHAR("createdAt", '${groupFormat}')`), 'period'],
                [Sequelize.fn('COUNT', '*'), 'orderCount']
            ],
            group: ['period'],
            order: [[Sequelize.literal('period'), 'ASC']]
        });

        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch order counts', details: err.message });
    }
};


exports.getAvgItemsPerOrder = async (req, res) => {
    try {
        const result = await OrderItem.findAll({
            attributes: [
                [fn('AVG', col('quantity')), 'avgItems']
            ]
        });

        const avg = parseFloat(result[0].get('avgItems')).toFixed(2);

        res.json({ avgItemsPerOrder: avg });
    } catch (err) {
        res.status(500).json({ error: 'Failed to calculate average items per order' });
    }
};




exports.getAvgFulfillmentTime = async (req, res) => {
    try {
        const result = await Order.findAll({
            where: {
                fulfilledAt: { [Op.ne]: null }
            },
            attributes: [
                [
                    literal(`AVG(EXTRACT(EPOCH FROM "fulfilledAt" - "createdAt") / 60)`),
                    'avgMinutes'
                ]
            ]
    });

        const avgMinutes = parseFloat(result[0].get('avgMinutes')).toFixed(2);
        res.json({ avgFulfillmentTimeMinutes: avgMinutes });
    } catch (err) {
        console.error(err); // Keep this for debugging
        res.status(500).json({ error: 'Failed to calculate fulfillment time' });
    }
};



exports.getCancellationRate = async (req, res) => {
    try {
        const totalOrders = await Order.count();
        const cancelledOrders = await Order.count({ where: { status: 'cancelled' } });

        const rate = totalOrders ? ((cancelledOrders / totalOrders) * 100).toFixed(2) : 0;

        res.json({ cancellationRate: `${rate}%` });
    } catch (err) {
        res.status(500).json({ error: 'Failed to calculate cancellation rate' });
    }
};


exports.getPopularCombinations = async (req, res) => {
    try {
        const combinations = await OrderItem.findAll({
            attributes: ['productId', [fn('COUNT', 'productId'), 'count']],
            group: ['OrderItem.productId', 'Product.id', 'Product.name'],
            include: [{ model: Product, attributes: ['name'] }],
            order: [[fn('COUNT', 'productId'), 'DESC']],
            limit: 5
        });

        const result = combinations.map(item => ({
            product: item.Product.name,
            count: item.get('count')
        }));

        res.json({ popularProducts: result });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch combinations', details: err.message });
    }
};


exports.getPeakOrderTimes = async (req, res) => {
    try {
        const orders = await Order.findAll({
            attributes: [
                [Sequelize.literal(`EXTRACT(HOUR FROM "createdAt")`), 'hour'],
                [fn('COUNT', '*'), 'orderCount']
            ],
            group: [Sequelize.literal(`EXTRACT(HOUR FROM "createdAt")`)],
            order: [Sequelize.literal(`EXTRACT(HOUR FROM "createdAt") ASC`)]
        });

        res.json(orders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch peak ordering times', details: err.message });
    }
};

