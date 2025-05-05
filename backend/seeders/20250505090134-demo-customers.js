'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [
      { id: 1, name: 'Arun', isReturning: true, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Priya', isReturning: false, createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Kumar', isReturning: true, createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Rani', isReturning: false, createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'Vijay', isReturning: true, createdAt: new Date(), updatedAt: new Date() },
      { id: 6, name: 'Deepa', isReturning: false, createdAt: new Date(), updatedAt: new Date() },
      { id: 7, name: 'Suresh', isReturning: true, createdAt: new Date(), updatedAt: new Date() },
      { id: 8, name: 'Meena', isReturning: false, createdAt: new Date(), updatedAt: new Date() },
      { id: 9, name: 'Ravi', isReturning: true, createdAt: new Date(), updatedAt: new Date() },
      { id: 10, name: 'Anita', isReturning: false, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
