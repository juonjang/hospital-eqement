const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');
const Form = require('./formModel');
const Question = require('./questionModel');

const Response = sequelize.define('Response', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'user_id',
    },
  },
  form_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'forms',
      key: 'id',
    },
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'questions',
      key: 'id',
    },
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'responses',
});

Response.belongsTo(User, { foreignKey: 'user_id' });
Response.belongsTo(Form, { foreignKey: 'form_id' });
Response.belongsTo(Question, { foreignKey: 'question_id' });

module.exports = Response;
