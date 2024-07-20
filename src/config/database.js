const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hospital_equipment', 'phuchit', 'qaz123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
