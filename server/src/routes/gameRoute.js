const express = require('express');
const route = express.Router();
const { Statistic, User_question } = require('../../db/models');

route.post('/new', async (req, res) => {
  try {
    const { user } = req.session;
    const userScore = await Statistic.create({
      user_id: user.id,
      totalScore: 0,
    });
    for (let i = 1; i <= 20; i += 1) {
      await User_question.create({
        user_id: user.id,
        question_id: i,
        status: false,
      });
    }
    const arrStatusQuestions = await User_question.findAll({
      where: { user_id: user.id },
    });
    console.log('arrStatusQuestions', arrStatusQuestions);
    console.log('userScore', userScore);
    res.json({ arrStatusQuestions, userScore });
  } catch (error) {
    console.log(error);
  }
});

route.get('/', async (req, res) => {
  try {
    const { user } = req.session;
    const allUserScore = await Statistic.findAll({
      where: { user_id: user.id },
      order: [['createdAt', 'DESC']],
    });
    const userScore = allUserScore[0];
    console.log('userScore ==========>', allUserScore);

    const arrStatusQuestions = await User_question.findAll({
      where: { user_id: user.id },
    });
    res.json({ arrStatusQuestions, userScore });
  } catch (error) {
    console.log(error);
  }
});

route.put('/scoreAndstatus', async (req, res) => {
  try {
    const { user } = req.session;
    const UserScore = await Statistic.findAll({
      where: { user_id: user.id },
      order: [['createdAt', 'DESC']],
      limit: 1,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
