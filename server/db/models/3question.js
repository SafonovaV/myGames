'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ User_question }) {
      Question.hasMany(User_question, { foreignKey: 'question_id' });
    }
  }
  Question.init(
    {
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      score: DataTypes.INTEGER,
      topic: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
