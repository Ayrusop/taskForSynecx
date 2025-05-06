'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      { name: 'Milk 1L', categoryId: 1, price: 45.0, quantity: 10, stock: 100, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Butter 500g', categoryId: 1, price: 150.0, quantity: 15, stock: 50, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Chips', categoryId: 2, price: 20.0, quantity: 25, stock: 80, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Soda Can', categoryId: 4, price: 35.0, quantity: 18, stock: 60, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bread', categoryId: 5, price: 30.0, quantity: 20, stock: 70, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Frozen Pizza', categoryId: 6, price: 180.0, quantity: 8, stock: 40, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Chicken Breast', categoryId: 7, price: 220.0, quantity: 12, stock: 30, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Tomato Can', categoryId: 8, price: 55.0, quantity: 22, stock: 90, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Shampoo 200ml', categoryId: 9, price: 95.0, quantity: 14, stock: 50, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Detergent 1kg', categoryId: 10, price: 110.0, quantity: 16, stock: 60, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
