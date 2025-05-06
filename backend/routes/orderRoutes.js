const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/counts', orderController.getOrderCounts);
router.get('/avg-items', orderController.getAvgItemsPerOrder);
router.get('/fulfillment-time', orderController.getAvgFulfillmentTime);
router.get('/cancellation-rate', orderController.getCancellationRate);
router.get('/popular-combos', orderController.getPopularCombinations);
router.get('/peak-times', orderController.getPeakOrderTimes);

module.exports = router;
