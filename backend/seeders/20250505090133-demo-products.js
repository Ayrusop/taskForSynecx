'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      { id: 1, name: 'Milk 1L', categoryId: 1, price: 45.0, stock: 100, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Butter 500g', categoryId: 1, price: 150.0, stock: 50, createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Chips', categoryId: 2, price: 20.0, stock: 80, createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Soda Can', categoryId: 4, price: 35.0, stock: 60, createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'Bread', categoryId: 5, price: 30.0, stock: 70, createdAt: new Date(), updatedAt: new Date() },
      { id: 6, name: 'Frozen Pizza', categoryId: 6, price: 180.0, stock: 40, createdAt: new Date(), updatedAt: new Date() },
      { id: 7, name: 'Chicken Breast', categoryId: 7, price: 220.0, stock: 30, createdAt: new Date(), updatedAt: new Date() },
      { id: 8, name: 'Tomato Can', categoryId: 8, price: 55.0, stock: 90, createdAt: new Date(), updatedAt: new Date() },
      { id: 9, name: 'Shampoo 200ml', categoryId: 9, price: 95.0, stock: 50, createdAt: new Date(), updatedAt: new Date() },
      { id: 10, name: 'Detergent 1kg', categoryId: 10, price: 110.0, stock: 60, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
