const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Question = require('./questionModel'); // นำเข้า Question model

const Form = sequelize.define('Form', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

// สร้างความสัมพันธ์
Form.hasMany(Question, { foreignKey: 'formId' });
Question.belongsTo(Form, { foreignKey: 'formId' });

module.exports = Form;
