'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    static associate({ User }) {
      Statistic.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Statistic.init(
    {
      user_id: DataTypes.INTEGER,
      totalScore: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Statistic',
    }
  );
  return Statistic;
};
