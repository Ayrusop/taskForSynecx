const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('superMarket', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres',
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection successful!');
    } catch (error) {
        console.error('Unable to connect:', error);
    }
})();
