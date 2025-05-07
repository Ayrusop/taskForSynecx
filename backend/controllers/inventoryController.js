
const { Product, SaleItem } = require('../models');
const { fn, col, literal, Sequelize } = require('sequelize');

// 1. Fast vs Slow moving products (last 30 days)
exports.getProductMovement = async (req, res) => {
    try {
        const results = await SaleItem.findAll({
            attributes: [
                'productId',
                [fn('SUM', col('SaleItem.quantity')), 'totalSold'] // disambiguated here
            ],
            include: [{ model: Product, attributes: ['name', 'stock'] }],
            where: {
                createdAt: {
                    [Sequelize.Op.gte]: Sequelize.literal("CURRENT_DATE - INTERVAL '30 days'")
                }
            },
            group: ['productId', 'Product.id'],
            order: [[col('totalSold'), 'DESC']]

        });

        const fastMoving = results.slice(0, 5); // top 5
        const slowMoving = results.slice(-5);   // bottom 5

        res.json({ fastMoving, slowMoving });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch product movement', details: err.message });
    }
};


// 2. Low stock alerts
exports.getLowStockProducts = async (req, res) => {
    try {
        console.log(req.query); // Log the query parameters for debugging
        const threshold = parseInt(req.query.threshold) || 10; // default to 10
        const lowStock = await Product.findAll({
            where: {
                stock: { [Sequelize.Op.lte]: threshold }
            },
            attributes: ['id', 'name', 'stock']
        });

        res.json({ lowStock });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch low stock products', details: err.message });
    }
};
