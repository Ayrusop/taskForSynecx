const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/total', customerController.getTotalCustomers);
router.get('/type-stats', customerController.getCustomerTypeStats);
router.get('/visit-frequency', customerController.getCustomerVisitFrequency);
router.get('/avg-spend', customerController.getAvgSpendPerCustomer);

module.exports = router;
