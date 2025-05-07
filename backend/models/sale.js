'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    static associate(models) {
 
      Sale.hasMany(models.Payment, { foreignKey: 'saleId' });


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
      tableName: 'Sales', 
      timestamps: true 
    }
  );

  return Sale;
};
