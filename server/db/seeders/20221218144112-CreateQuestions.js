'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question:
            'В средневековой Японии все самураи, получали продовольственные пайки, размер которых зависел от положения самурая. Какой продукт составлял эти пайки?',
          answer: 'Рис',
          score: 200,
          topic_id: 1,
        },
        {
          question:
            ' В некоторых ресторанах США за особо высокую плату можно попробовать жаркое из мяса этих доисторических животных. Мясо доставляется самолетами с Аляски. ',
          answer: 'Мамонт',
          score: 400,
          topic_id: 1,
        },
        {
          question:
            'Пословица этой страны утверждает, что для повара годится все, кроме Луны и ее отражения в воде.',
          answer: 'Китай',
          score: 600,
          topic_id: 1,
        },
        {
          question:
            'Какой привычный всем нам продукт в японской национальной кухне заменяет соевый соус?',
          answer: 'Соль',
          score: 800,
          topic_id: 1,
        },
        {
          question:
            'В XIX веке Талейран говорил об этой стране, что в ней есть тридцать две религии, но только одно блюдо. Да и то плохое. Многие гурманы и сейчас готовы подписаться под этим высказыванием.',
          answer: 'США',
          score: 1000,
          topic_id: 1,
        },

        {
          question:
            'По мнению Талейрана, этот напиток должен быть крепким, как негр, черным, как ночь, и сладким, как первый поцелуй. Назовите его.',
          answer: 'Кофе',
          score: 200,
          topic_id: 2,
        },
        {
          question:
            'Что, по мнению польского сатирика Леца, открывает любой рот?',
          answer: 'Хлеб',
          score: 400,
          topic_id: 2,
        },
        {
          question:
            'По мнению А. Чехова, голодная собака верит только в ... Это некий продукт. Назовите его.',
          answer: 'Мясо',
          score: 600,
          topic_id: 2,
        },
        {
          question:
            'Как заканчивается известная схема Карла Маркса: "Товар — деньги — ..."?',
          answer: 'Товар',
          score: 800,
          topic_id: 2,
        },
        {
          question:
            'Закончите узбекскую пословицу: "Если хочешь здоровья, не ешь много; если хочешь почета – ..."',
          answer: 'Не говори много',
          score: 1000,
          topic_id: 2,
        },

        {
          question:
            'Всем с детства знакома эта поучительная история о долгом пути хлебобулочного изделия к потребителю.',
          answer: 'Колобок',
          score: 200,
          topic_id: 3,
        },
        {
          question:
            'Какой овощ отобрал у Паниковского Остап Бендер со словами: «Не делайте из еды культа»?',
          answer: 'Огурец',
          score: 400,
          topic_id: 3,
        },
        {
          question:
            '«И мудрый Вольтер сомневался в ядовитости...» этого напитка, - сказал Козьма Прутков. О каком напитке идет речь?',
          answer: 'Кофе',
          score: 600,
          topic_id: 3,
        },
        {
          question:
            'Если сердце жителя Древнего Египта переполнялось чувством негодования, то он мог нарисовать на подошвах сандалий некое изображение. Что он изображал: самого себя, своего врага, меч или свой талисман?',
          answer: 'Своего врага',
          score: 800,
          topic_id: 3,
        },
        {
          question:
            'Эту траву, из которой делают всем известную приправу, первыми в России стали возделывать немцы из Сарепты.',
          answer: 'Горчица',
          score: 1000,
          topic_id: 3,
        },

        {
          question:
            'У какого бога древние греки просили успешного плавания кораблю?',
          answer: 'Посейдона',
          score: 200,
          topic_id: 4,
        },
        {
          question:
            'В Древней Иудее это вредное насекомое считалось съедобным, так как по вкусу оно якобы напоминает креветку.',
          answer: 'Саранча',
          score: 400,
          topic_id: 4,
        },
        {
          question:
            'От какой империи Россия унаследовала двуглавого орла на гербе?',
          answer: 'Византийской',
          score: 600,
          topic_id: 4,
        },
        {
          question: 'Имя первого царя из династии Романовых.',
          answer: 'Михаил',
          score: 800,
          topic_id: 4,
        },
        {
          question: 'Для чего в Древней Руси «точили лясы»?',
          answer: 'Для перил',
          score: 1000,
          topic_id: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
