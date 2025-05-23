// controllers/salesController.js
const { Sale, SaleItem, Product, Category,Payment } = require('../models');
const { Op, fn, col, literal, Sequelize } = require('sequelize');
// const { Op, fn, col, literal } = require('sequelize'); 

exports.getSalesSummary = async (req, res) => {
    try {
        const today = new Date();
        const weekAgo = new Date(today);
        weekAgo.setDate(today.getDate() - 7);
        const monthAgo = new Date(today);
        monthAgo.setMonth(today.getMonth() - 1);

        const dailySales = await Sale.sum('total', {
            where: Sequelize.where(fn('DATE', col('createdAt')), today.toISOString().slice(0, 10))
        });

        const weeklySales = await Sale.sum('total', {
            where: { createdAt: { [Op.gte]: weekAgo } }
        });

        const monthlySales = await Sale.sum('total', {
            where: { createdAt: { [Op.gte]: monthAgo } }
        });

        const billCount = await Sale.count();
        const avgBill = await Sale.findAll({
            attributes: [[fn('AVG', col('total')), 'avg_bill']]
        });

        res.json({
            dailySales,
            weeklySales,
            monthlySales,
            totalBills: billCount,
            avgBillValue: parseFloat(avgBill[0].dataValues.avg_bill || 0)
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch sales summary', details: err.message });
    }
};


exports.getTopProducts = async (req, res) => {
    const item = await SaleItem.findOne({
        where: { productId: 5 },
        include: Product
    });
    console.log(item);
    try {
        const topProducts = await SaleItem.findAll({
            attributes: [
                'productId',
                [fn('SUM', col('SaleItem.quantity')), 'totalSold'],
                [fn('SUM', literal('"SaleItem"."quantity" * "SaleItem"."unit_price"')), 'revenue']
            ],
            include: [
                {
                    model: Product,
                    attributes: ['name', 'categoryId'],
                    include: [
                        {
                            model: Category,
                            attributes: ['name']
                        }
                    ]
                }
            ],
            group: ['productId', 'Product.id', 'Product->Category.id'],
            order: [[col('totalSold'), 'DESC']],
            limit: 5
        });

        res.json(topProducts);
        
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch top products', details: err.message });
    }
};


exports.getSalesByCategory = async (req, res) => {
    try {
        const results = await SaleItem.findAll({
            attributes: [
                [fn('SUM', literal('"SaleItem"."quantity" * "SaleItem"."unit_price"')), 'totalSales']
            ],
            include: [
                {
                    model: Product,
                    attributes: ['id', 'categoryId'],
                    include: [
                        {
                            model: Category,
                            attributes: ['id', 'name']
                        }
                    ]
                }
            ],
            group: [
                'Product.id',
                'Product.categoryId',
                'Product->Category.id'
            ]
        });

        const categorySales = results
            .filter(item => item.Product && item.Product.Category)
            .map(item => ({
                category: item.Product.Category.name,
                totalSales: parseFloat(item.dataValues.totalSales)
            }));

        res.json(categorySales);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch category sales', details: err.message });
    }
};


exports.getTimeTrends = async (req, res) => {
    try {
      const trends = await Sale.findAll({
        attributes: [
          [fn('DATE', col('date')), 'saleDate'],
          [fn('SUM', col('total')), 'totalSales']
        ],
        where: {
          date: {
            [Op.gte]: Sequelize.literal("CURRENT_DATE - INTERVAL '7 days'")
          }
        },
        group: [fn('DATE', col('date'))],
        order: [[fn('DATE', col('date')), 'ASC']]
      });
  
      res.json(trends);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch sales trends', details: err.message });
    }
  };



exports.getPaymentMethodBreakdown = async (req, res) => {
  try {
    const breakdown = await Payment.findAll({
      attributes: [
        'method',
        [Sequelize.fn('SUM', Sequelize.col('amount')), 'totalAmount']
      ],
      group: ['method'],
      raw: true
    });

    res.json(breakdown);
  } catch (error) {
    console.error('Error fetching payment breakdown:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
