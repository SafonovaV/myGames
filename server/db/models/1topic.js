'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate({ Question }) {
      Topic.hasMany(Question, { foreignKey: 'topic_id' });
    }
  }
  Topic.init(
    {
      topic: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Topic',
    }
  );
  return Topic;
};
