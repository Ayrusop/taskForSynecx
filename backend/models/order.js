module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
           
            primaryKey: true
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM('completed', 'cancelled', 'pending'),
            defaultValue: 'pending'
        },
        paymentMethod: {
            type: DataTypes.ENUM('cash', 'card', 'upi'),
            allowNull: false
        },
        totalAmount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        fulfilledAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    });

    Order.associate = (models) => {
        Order.belongsTo(models.Customer, { foreignKey: 'customerId' });
        Order.hasMany(models.OrderItem, { foreignKey: 'orderId' });
    };

    return Order;
};
