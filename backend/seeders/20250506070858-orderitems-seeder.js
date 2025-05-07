'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderItems', [
 
      { orderId: '1', productId: '1', quantity: 2, price: 25.5, createdAt: new Date(), updatedAt: new Date() },
      { orderId: '2', productId: '2', quantity: 1, price: 40.0, createdAt: new Date(), updatedAt: new Date() },
      { orderId: '3', productId: '3', quantity: 3, price: 15.0, createdAt: new Date(), updatedAt: new Date() },
      { orderId: '4', productId: '4', quantity: 1, price: 60.0, createdAt: new Date(), updatedAt: new Date() },
      { orderId: '5', productId: '5', quantity: 2, price: 22.0, createdAt: new Date(), updatedAt: new Date() },
      { orderId: '6', productId: '6', quantity: 4, price: 10.0, createdAt: new Date(), updatedAt: new Date() },
      { orderId: '7', productId: '7', quantity: 1, price: 75.0, createdAt: new Date(), updatedAt: new Date() },
      { orderId: '8', productId: '8', quantity: 2, price: 30.0, createdAt: new Date(), updatedAt: new Date() },
      { orderId: '9', productId: '9', quantity: 3, price: 18.5, createdAt: new Date(), updatedAt: new Date() },
      { orderId: '10', productId: '10', quantity: 2, price: 45.0, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderItems', null, {});
  }
};
