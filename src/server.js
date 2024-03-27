const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('DBBookingCare', 'root', '12345', {
    host: 'vinc02bookingcare.click',
    port: 3307,
    dialect: 'mysql',
    logging: false
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Successed');

    } catch (error) {
        console.error('Failed:', error);
    }
}

testConnection();
