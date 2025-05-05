'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      { id: 1, name: 'Dairy', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Snacks', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Vegetables', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Beverages', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'Bakery', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, name: 'Frozen Foods', createdAt: new Date(), updatedAt: new Date() },
      { id: 7, name: 'Meat', createdAt: new Date(), updatedAt: new Date() },
      { id: 8, name: 'Canned Goods', createdAt: new Date(), updatedAt: new Date() },
      { id: 9, name: 'Personal Care', createdAt: new Date(), updatedAt: new Date() },
      { id: 10, name: 'Household', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
