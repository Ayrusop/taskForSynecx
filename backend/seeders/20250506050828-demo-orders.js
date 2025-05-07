'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('Orders', [
      // Dummy data for Orders
      {
        id: 1,  
        customerId: '1',  
        status: 'completed',  
        paymentMethod: 'card',  
        totalAmount: 150.75,  
        fulfilledAt: new Date(),  
        createdAt: new Date(new Date(now).setHours(0, 15)), 
        updatedAt: new Date()  
      },
      {
        id: 2,
        customerId: '2',  
        status: 'pending',
        paymentMethod: 'cash',
        totalAmount: 220.50,
        fulfilledAt: null,  
        createdAt: new Date(new Date(now).setHours(0, 15)),
        updatedAt: new Date()
      },
      {
        id: 3,
        customerId: '3',  
        status: 'cancelled',
        paymentMethod: 'upi',
        totalAmount: 99.99,
        fulfilledAt: null,  
        createdAt: new Date(new Date(now).setHours(4, 10)),  
        updatedAt: new Date()
      },
      {
        id: 4,
        customerId: '4',  
        status: 'completed',
        paymentMethod: 'card',
        totalAmount: 500.00,
        fulfilledAt: new Date(),
        createdAt: new Date(new Date(now).setHours(4, 10)),  
        updatedAt: new Date()
      },
      {
        id: 5,
        customerId: '5',  
        status: 'pending',
        paymentMethod: 'cash',
        totalAmount: 35.20,
        fulfilledAt: null,
        createdAt: new Date(new Date(now).setHours(4, 10)),  
        updatedAt: new Date()
      },
      {
        id: 6,
        customerId: '6',  
        status: 'completed',
        paymentMethod: 'upi',
        totalAmount: 120.10,
        fulfilledAt: new Date(),
        createdAt: new Date(new Date(now).setHours(10, 55)),  
        updatedAt: new Date()
      },
      {
        id: 7,  
        customerId: '1',  
        status: 'completed',  
        paymentMethod: 'card',  
        totalAmount: 150.75,  
        fulfilledAt: new Date(),  
        createdAt: new Date(new Date(now).setHours(10, 55)),  
        updatedAt: new Date()  
      },
      {
        id: 8,
        customerId: '2',  
        status: 'pending',
        paymentMethod: 'cash',
        totalAmount: 220.50,
        fulfilledAt: null,  
        createdAt: new Date(new Date(now).setHours(12, 0)),  
        updatedAt: new Date()
      },
      {
        id: 9,
        customerId: '3',  
        status: 'cancelled',
        paymentMethod: 'upi',
        totalAmount: 99.99,
        fulfilledAt: null,  
        createdAt: new Date(new Date(now).setHours(12, 0)),  
        updatedAt: new Date()
      },
      {
        id: 10,
        customerId: '4',  
        status: 'completed',
        paymentMethod: 'card',
        totalAmount: 500.00,
        fulfilledAt: new Date(),
        createdAt: new Date(new Date(now).setHours(16, 25)),  
        updatedAt: new Date()
      },
      {
        id: 11,
        customerId: '5',  
        status: 'pending',
        paymentMethod: 'cash',
        totalAmount: 35.20,
        fulfilledAt: null,
        createdAt: new Date(new Date(now).setHours(16, 25)),  
        updatedAt: new Date()
      },
      {
        id: 12,
        customerId: '6',  
        status: 'completed',
        paymentMethod: 'upi',
        totalAmount: 120.10,
        fulfilledAt: new Date(),
        createdAt: new Date(new Date(now).setHours(16, 25)),  
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
