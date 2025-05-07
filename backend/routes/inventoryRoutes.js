const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.get('/movement', inventoryController.getProductMovement);
router.get('/low-stock', inventoryController.getLowStockProducts);

module.exports = router;
