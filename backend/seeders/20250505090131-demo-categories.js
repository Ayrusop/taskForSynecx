'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      { name: 'Dairy', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Snacks', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Vegetables', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Beverages', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bakery', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Frozen Foods', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Meat', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Canned Goods', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Personal Care', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Household', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
