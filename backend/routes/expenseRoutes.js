const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.get('/allexpense', expenseController.getAllExpenses);
router.get('/create-expense', expenseController.createExpense);
router.get('/update', expenseController.updateExpense);
router.get('/delete', expenseController.deleteExpense);

module.exports = router;
