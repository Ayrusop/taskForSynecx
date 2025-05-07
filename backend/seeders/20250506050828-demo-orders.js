'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('Orders', [
      // Dummy data for Orders
      {
        id: 1,  // UUID generation
        customerId: '1',  // Example customer ID (ensure this customer exists in your DB)
        status: 'completed',  // Status of the order
        paymentMethod: 'card',  // Payment method used
        totalAmount: 150.75,  // Total amount of the order
        fulfilledAt: new Date(),  // Fulfilled date (optional)
        createdAt: new Date(new Date(now).setHours(0, 15)), // ✅ Right - clones the date first
        updatedAt: new Date()  // Updated timestamp
      },
      {
        id: 2,
        customerId: '2',  // Another example customer ID
        status: 'pending',
        paymentMethod: 'cash',
        totalAmount: 220.50,
        fulfilledAt: null,  // Not yet fulfilled
        createdAt: new Date(new Date(now).setHours(0, 15)),
        updatedAt: new Date()
      },
      {
        id: 3,
        customerId: '3',  // Example customer ID
        status: 'cancelled',
        paymentMethod: 'upi',
        totalAmount: 99.99,
        fulfilledAt: null,  // Not fulfilled since the order was cancelled
        createdAt: new Date(new Date(now).setHours(4, 10)),  // 04:10 AM
        updatedAt: new Date()
      },
      {
        id: 4,
        customerId: '4',  // Example customer ID
        status: 'completed',
        paymentMethod: 'card',
        totalAmount: 500.00,
        fulfilledAt: new Date(),
        createdAt: new Date(new Date(now).setHours(4, 10)),  // 04:10 AM
        updatedAt: new Date()
      },
      {
        id: 5,
        customerId: '5',  // Example customer ID
        status: 'pending',
        paymentMethod: 'cash',
        totalAmount: 35.20,
        fulfilledAt: null,
        createdAt: new Date(new Date(now).setHours(4, 10)),  // 04:10 AM
        updatedAt: new Date()
      },
      {
        id: 6,
        customerId: '6',  // Example customer ID
        status: 'completed',
        paymentMethod: 'upi',
        totalAmount: 120.10,
        fulfilledAt: new Date(),
        createdAt: new Date(new Date(now).setHours(10, 55)),  // 10:55 AM
        updatedAt: new Date()
      },
      {
        id: 7,  // UUID generation
        customerId: '1',  // Example customer ID (ensure this customer exists in your DB)
        status: 'completed',  // Status of the order
        paymentMethod: 'card',  // Payment method used
        totalAmount: 150.75,  // Total amount of the order
        fulfilledAt: new Date(),  // Fulfilled date (optional)
        createdAt: new Date(new Date(now).setHours(10, 55)),  // 10:55 AM
        updatedAt: new Date()  // Updated timestamp
      },
      {
        id: 8,
        customerId: '2',  // Another example customer ID
        status: 'pending',
        paymentMethod: 'cash',
        totalAmount: 220.50,
        fulfilledAt: null,  // Not yet fulfilled
        createdAt: new Date(new Date(now).setHours(12, 0)),  // 12:00 PM
        updatedAt: new Date()
      },
      {
        id: 9,
        customerId: '3',  // Example customer ID
        status: 'cancelled',
        paymentMethod: 'upi',
        totalAmount: 99.99,
        fulfilledAt: null,  // Not fulfilled since the order was cancelled
        createdAt: new Date(new Date(now).setHours(12, 0)),  // 12:00 PM
        updatedAt: new Date()
      },
      {
        id: 10,
        customerId: '4',  // Example customer ID
        status: 'completed',
        paymentMethod: 'card',
        totalAmount: 500.00,
        fulfilledAt: new Date(),
        createdAt: new Date(new Date(now).setHours(16, 25)),  // 04:25 PM
        updatedAt: new Date()
      },
      {
        id: 11,
        customerId: '5',  // Example customer ID
        status: 'pending',
        paymentMethod: 'cash',
        totalAmount: 35.20,
        fulfilledAt: null,
        createdAt: new Date(new Date(now).setHours(16, 25)),  // 04:25 PM
        updatedAt: new Date()
      },
      {
        id: 12,
        customerId: '6',  // Example customer ID
        status: 'completed',
        paymentMethod: 'upi',
        totalAmount: 120.10,
        fulfilledAt: new Date(),
        createdAt: new Date(new Date(now).setHours(16, 25)),  // 04:25 PM
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
