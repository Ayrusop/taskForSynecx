'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Expenses', [
      {
        type: 'Office Supplies',
        amount: 250.50,
        date: new Date('2025-04-01'),
        description: 'Purchased printer ink and paper',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Travel',
        amount: 1200.00,
        date: new Date('2025-04-05'),
        description: 'Flight tickets for client meeting',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Food',
        amount: 150.00,
        date: new Date('2025-04-07'),
        description: 'Team lunch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Utilities',
        amount: 800.00,
        date: new Date('2025-04-10'),
        description: 'Electricity bill payment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Internet',
        amount: 500.00,
        date: new Date('2025-04-12'),
        description: 'Monthly broadband subscription',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Maintenance',
        amount: 300.00,
        date: new Date('2025-04-15'),
        description: 'Air conditioner service',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Salary',
        amount: 10000.00,
        date: new Date('2025-04-20'),
        description: 'April salary payment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Marketing',
        amount: 2000.00,
        date: new Date('2025-04-22'),
        description: 'Google Ads campaign',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Training',
        amount: 750.00,
        date: new Date('2025-04-25'),
        description: 'Workshop registration fee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Consulting',
        amount: 1800.00,
        date: new Date('2025-04-28'),
        description: 'Business strategy consulting fee',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Expenses', null, {});
  }
};
