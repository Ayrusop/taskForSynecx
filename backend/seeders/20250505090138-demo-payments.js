'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Payments', [
      { saleId: 1, method: 'cash', amount: 180.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 2, method: 'card', amount: 220.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 3, method: 'upi', amount: 90.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 4, method: 'card', amount: 300.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 5, method: 'cash', amount: 125.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 6, method: 'upi', amount: 175.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 7, method: 'card', amount: 210.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 8, method: 'cash', amount: 85.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 9, method: 'upi', amount: 60.0, createdAt: new Date(), updatedAt: new Date() },
      { saleId: 10, method: 'card', amount: 195.0, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Payments', null, {});
  }
};
