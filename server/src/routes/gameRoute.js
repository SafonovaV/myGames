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
    const { activQuestion } = req.body;
    const userScore = await Statistic.findAll({
      where: { user_id: user.id },
      order: [['createdAt', 'DESC']],
      limit: 1,
    });
    await userScore[0].increment({ totalScore: activQuestion.score });
    await User_question.update(
      { status: true },
      { where: { question_id: activQuestion.id } }
    );

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

route.put('/decscoreAndstatus', async (req, res) => {
  try {
    const { user } = req.session;
    const { activQuestion } = req.body;
    const userScore = await Statistic.findAll({
      where: { user_id: user.id },
      order: [['createdAt', 'DESC']],
      limit: 1,
    });
    await userScore[0].increment({ totalScore: -activQuestion.score });
    await User_question.update(
      { status: true },
      { where: { question_id: activQuestion.id } }
    );

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

route.delete('/', async (req, res) => {
  try {
    const { user } = req.session;
    for (let i = 1; i <= 20; i += 1) {
      await User_question.destroy({
        where: { user_id: user.id, question_id: i },
      });
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
