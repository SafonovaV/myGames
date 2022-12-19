'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          login: 'aaaa',
          password:'123',
          email: 'a@a.com',
        },
        // {
        //   login: 'b',
        //   password:'123',
        //   email: 'b@a.com',
        // },
        // {
        //   login: 'c',
        //   password:'123',
        //   email: 'c@a.com',
        // },
        // {
        //   login: 'd',
        //   password:'123',
        //   email: 'd@a.com',
        // },
        // {
        //   login: 'w',
        //   password:'123',
        //   email: 'w@a.com',
        // },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
