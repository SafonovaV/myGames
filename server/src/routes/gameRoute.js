const express = require('express');
const route = express.Router();
const { Statistic } = require('../../db/models');

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

module.exports = route;
