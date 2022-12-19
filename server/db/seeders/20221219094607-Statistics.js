'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Statistics',
      [
        {
          user_id: 1,
          totalScore: 200,
        },
        {
          user_id: 1,
          totalScore: 400,
        },
        {
          user_id: 1,
          totalScore: 200,
        },
        {
          user_id: 1,
          totalScore: 600,
        },
        {
          user_id: 1,
          totalScore: 800,
        },
        {
          user_id: 1,
          totalScore: 400,
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statistics', null, {});
  }
};
