'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const baseDate = new Date(); // today
    const sales = [];

    for (let i = 0; i < 10; i++) {
      sales.push({
        id: i + 1,
        date: new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() - i), // each day before today
        total: [180, 220, 90, 300, 125, 175, 210, 85, 60, 195][i],
        customerId: i + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('Sales', sales);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sales', null, {});
  }
};
