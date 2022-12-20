const express = require('express');
const router = express.Router();
const { Statistic } = require('../../db/models');

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
  const user = req.session.user
  const allStatistics = await Statistic.findAll({ where: { user_id: user.id}, order: [['id','DESC']], raw: true });
  // console.log('🚀 ~ allStatistics', allStatistics)
  
  res.json({ allStatistics })
} catch (error) {
  console.error(err);
}

})


module.exports = router;