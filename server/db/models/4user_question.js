'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_question extends Model {
    static associate({ User, Question }) {
      User_question.belongsTo(User, { foreignKey: 'user_id' });
      User_question.belongsTo(Question, { foreignKey: 'question_id' });
    }
  }
  User_question.init(
    {
      user_id: DataTypes.INTEGER,
      question_id: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'User_question',
    }
  );
  return User_question;
};
