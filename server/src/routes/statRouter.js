const express = require('express');
const router = express.Router();
const { Statistic } = require('../../db/models');
const json2xls = require('json2xls');
const fs = require('fs');

// router.post('/statistic', async (req, res) => {
//   try {
//     const { user_id, totalScore } = req.body;
//     const result = await Statistic.create({
//       user_id: user_id,
//       total_score: totalScore
//     });
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Ошибка сервера');
//   }
// });

router.get('/', async (req, res) => {
  try {
    const user = req.session.user;
    const allStatistics = await Statistic.findAll({
      where: { user_id: user.id },
      order: [['id', 'DESC']],
      raw: true,
    });
    // console.log('🚀 ~ allStatistics', allStatistics)

    res.json({ allStatistics });
  } catch (error) {
    console.error(err);
  }
});

router.get('/xlsx', async (req, res) => {
  try {
    const user = req.session.user;
    const allStatistics = await Statistic.findAll({
      where: { user_id: user.id },
      order: [['id', 'DESC']],
      raw: true,
    });
    const exeloutput = Date.now() + 'Statistic.xlsx';
    const xls = json2xls(allStatistics);

    fs.writeFileSync(exeloutput, xls, 'binary');
    res.download(exeloutput, (err) => {
      if (err) {
        fs.unlinkSync(exeloutput);
        res.send('Невозможно скачать exel  файл');
      }
      fs.unlinkSync(exeloutput);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
