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
          totalScore: 1000,
        },
        {
          user_id: 1,
          totalScore: 1200,
        },
        {
          user_id: 1,
          totalScore: 2000,
        },
        {
          user_id: 1,
          totalScore: 2800,
        },
        {
          user_id: 1,
          totalScore: 1800,
        },
        {
          user_id: 2,
          totalScore: 800,
        },
        {
          user_id: 2,
          totalScore: 2000,
        },
        {
          user_id: 2,
          totalScore: 1200,
        },
        {
          user_id: 2,
          totalScore: 2000,
        },
        {
          user_id: 2,
          totalScore: 100,
        },
        {
          user_id: 2,
          totalScore: 1800,
        },
        {
          user_id: 3,
          totalScore: 2800,
        },
        {
          user_id: 3,
          totalScore: 3000,
        },
        {
          user_id: 3,
          totalScore: 4200,
        },
        {
          user_id: 3,
          totalScore: 5000,
        },
        {
          user_id: 3,
          totalScore: 5400,
        },
        {
          user_id: 3,
          totalScore: 6200,
        }, 
        {
          user_id: 4,
          totalScore: 200,
        },
        {
          user_id: 4,
          totalScore: 400,
        },
        {
          user_id: 4,
          totalScore: 1200,
        },
        {
          user_id: 4,
          totalScore: 2000,
        },
        {
          user_id: 4,
          totalScore: 1400,
        },
        {
          user_id: 4,
          totalScore: 2200,
        },        
        {
          user_id: 5,
          totalScore: 200,
        },
        {
          user_id: 5,
          totalScore: 600,
        },
        {
          user_id: 5,
          totalScore: 200,
        },
        {
          user_id: 5,
          totalScore: 600,
        },
        {
          user_id: 5,
          totalScore: 400,
        },
        {
          user_id: 5,
          totalScore: 200,
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statistics', null, {});
  }
};
