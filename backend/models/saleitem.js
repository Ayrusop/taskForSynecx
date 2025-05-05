'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleItem extends Model {
    static associate(models) {
      
      SaleItem.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  SaleItem.init({
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    unit_price: DataTypes.FLOAT,
    discount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'SaleItem',
  });
  return SaleItem;
};
