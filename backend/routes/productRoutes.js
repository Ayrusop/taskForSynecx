const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/all-products', productController.getAllProducts);
router.get('/product/:id', productController.getProductById);
router.get('/create-product', productController.createProduct);
router.get('/update-product', productController.updateProduct);
router.get('/delete-product', productController.deleteProduct);

module.exports = router;
