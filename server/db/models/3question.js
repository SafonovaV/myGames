'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ User_question, Topic }) {
      Question.hasMany(User_question, { foreignKey: 'question_id' });
      Question.belongsTo(Topic, { foreignKey: 'topic_id' });
    }
  }
  Question.init(
    {
      topic_id: DataTypes.INTEGER,
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
