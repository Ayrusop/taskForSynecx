// routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

router.get('/summary', salesController.getSalesSummary);
router.get('/top-products', salesController.getTopProducts);
router.get('/by-category', salesController.getSalesByCategory);
router.get('/time-trends', salesController.getTimeTrends);
router.get('/payment-methods', salesController.getPaymentMethodBreakdown);

module.exports = router;
