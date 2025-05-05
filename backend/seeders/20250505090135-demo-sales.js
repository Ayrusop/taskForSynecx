'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sales', [
      { id: 1, date: new Date(), total: 180.0, customerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, date: new Date(), total: 220.0, customerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 3, date: new Date(), total: 90.0, customerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { id: 4, date: new Date(), total: 300.0, customerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { id: 5, date: new Date(), total: 125.0, customerId: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 6, date: new Date(), total: 175.0, customerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { id: 7, date: new Date(), total: 210.0, customerId: 7, createdAt: new Date(), updatedAt: new Date() },
      { id: 8, date: new Date(), total: 85.0, customerId: 8, createdAt: new Date(), updatedAt: new Date() },
      { id: 9, date: new Date(), total: 60.0, customerId: 9, createdAt: new Date(), updatedAt: new Date() },
      { id: 10, date: new Date(), total: 195.0, customerId: 10, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sales', null, {});
  }
};
