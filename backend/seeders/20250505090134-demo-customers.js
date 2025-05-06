'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [
      {  name: 'Arun', isReturning: true, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Priya', isReturning: false, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Kumar', isReturning: true, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Rani', isReturning: false, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Vijay', isReturning: true, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Deepa', isReturning: false, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Suresh', isReturning: true, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Meena', isReturning: false, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Ravi', isReturning: true, createdAt: new Date(), updatedAt: new Date() },
      {  name: 'Anita', isReturning: false, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
