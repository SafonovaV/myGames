const express = require('express');
const router = express.Router();

const { Question, Topic } = require('../../db/models');

// загрузка Доски с вопросами
router.get('/', async (req, res) => {
  // const userName = req.session?.user?.name;
  // const userId = req.session?.user?.id;
  // let canBet = true;
  // const itemId = req.params.id;

  try {
    const allBord = await Question.findAll().then((data) =>
      data.map((el) => el.dataValues)
    );
    const allTopics = await Topic.findAll();

    res.status('200').json({ allBord, allTopics });
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

module.exports = router;
