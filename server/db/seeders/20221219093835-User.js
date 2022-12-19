'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          login: 'Василиса',
          password:'123',
          email: 'a@a.com',
        },
        {
          login: 'Петя',
          password:'123',
          email: 'b@a.com',
        },
        {
          login: 'Сережа',
          password:'123',
          email: 'c@a.com',
        },
        {
          login: 'Валерия',
          password:'123',
          email: 'd@a.com',
        },
        {
          login: 'Игорь',
          password:'123',
          email: 'w@a.com',
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
