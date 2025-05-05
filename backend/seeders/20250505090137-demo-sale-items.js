'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SaleItems', [
      { saleId: 1, productId: 1, quantity: 2, unit_price: 45.0, discount: 5.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 1, productId: 2, quantity: 1, unit_price: 150.0, discount: 10.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 2, productId: 3, quantity: 3, unit_price: 20.0, discount: 0.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 3, productId: 4, quantity: 2, unit_price: 35.0, discount: 5.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 4, productId: 5, quantity: 4, unit_price: 30.0, discount: 15.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 5, productId: 6, quantity: 1, unit_price: 180.0, discount: 5.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 6, productId: 7, quantity: 2, unit_price: 220.0, discount: 20.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 7, productId: 8, quantity: 3, unit_price: 55.0, discount: 10.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 8, productId: 9, quantity: 1, unit_price: 95.0, discount: 0.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 9, productId: 10, quantity: 2, unit_price: 110.0, discount: 10.0, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SaleItems', null, {});
  }
};
