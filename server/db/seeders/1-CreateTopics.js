'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Topics',
      [
        {
          topic: 'Ох уж эти нравы!',
        },
        {
          topic: 'Популярные цитаты',
        },
        {
          topic: 'Разное',
        },
        {
          topic: 'Любителям истории',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
  },
};
