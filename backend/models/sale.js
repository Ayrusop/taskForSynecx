'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    static associate(models) {
      // A Sale has many Payments
      Sale.hasMany(models.Payment, { foreignKey: 'saleId' });

      // Optionally, if you have a Customer model:
      // Sale.belongsTo(models.Customer, { foreignKey: 'customerId' });
    }
  }

  Sale.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      total: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'Sale',
      tableName: 'Sales', // Ensure matches actual DB table
      timestamps: true // Enables createdAt and updatedAt
    }
  );

  return Sale;
};
