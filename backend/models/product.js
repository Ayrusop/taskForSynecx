'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
  
      Product.hasMany(models.SaleItem, { foreignKey: 'productId' });
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' }); // ✅ This line is essential
    }
  }

  Product.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    costPrice: DataTypes.FLOAT,
    categoryId: DataTypes.INTEGER,
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Product',
  });

  return Product;
};
