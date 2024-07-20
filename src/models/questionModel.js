const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Question = sequelize.define('Question', {
  questionText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  questionType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  formId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Forms', // ชื่อตารางที่เป็น foreign key
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
}, {
  timestamps: true,
});

module.exports = Question;
