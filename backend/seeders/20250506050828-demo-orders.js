'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      // Dummy data for Orders
      {
        id: 1,  // UUID generation
        customerId: '1',  // Example customer ID (ensure this customer exists in your DB)
        status: 'completed',  // Status of the order
        paymentMethod: 'card',  // Payment method used
        totalAmount: 150.75,  // Total amount of the order
        fulfilledAt: new Date(),  // Fulfilled date (optional)
        createdAt: new Date(),  // Created timestamp
        updatedAt: new Date()  // Updated timestamp
      },
      {
        id: 2,
        customerId: '2',  // Another example customer ID
        status: 'pending',
        paymentMethod: 'cash',
        totalAmount: 220.50,
        fulfilledAt: null,  // Not yet fulfilled
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        customerId: '3',  // Example customer ID
        status: 'cancelled',
        paymentMethod: 'upi',
        totalAmount: 99.99,
        fulfilledAt: null,  // Not fulfilled since the order was cancelled
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        customerId: '4',  // Example customer ID
        status: 'completed',
        paymentMethod: 'card',
        totalAmount: 500.00,
        fulfilledAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        customerId: '5',  // Example customer ID
        status: 'pending',
        paymentMethod: 'cash',
        totalAmount: 35.20,
        fulfilledAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        customerId: '6',  // Example customer ID
        status: 'completed',
        paymentMethod: 'upi',
        totalAmount: 120.10,
        fulfilledAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
