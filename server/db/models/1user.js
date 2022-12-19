'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Statistic, User_question }) {
      User.hasMany(Statistic, { foreignKey: 'user_id' });
      User.hasMany(User_question, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      login: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
