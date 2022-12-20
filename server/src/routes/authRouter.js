const express = require('express');
const route = express.Router();
const { User, User_question } = require('../../db/models/index');
const bcrypt = require('bcrypt');

route.post('/signup', async (req, res) => {
  const { login, password, email } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      login,
      password: hashPassword,
    });

    req.session.user = { name: newUser.login, id: newUser.id };
    req.session.save(() => {
      const { user } = req.session;
      res.json({ user });
    });
  } catch (error) {
    console.log(error);
    res.json({});
  }
});

route.post('/login', async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne({ where: { email }, raw: true });
    const isValidPassvord = await bcrypt.compare(password, user.password);

    if (isValidPassvord) {
      req.session.user = { name: user.login, id: user.id };
      req.session.save(() => {
        const { user } = req.session;
        res.json({ user });
      });
    } else {
      res.json({});
    }
  } catch (error) {
    console.log(error);
    res.json({});
  }
});

route.get('/checkAuth', (req, res) => {
  const user = req.session?.user;
  console.log('userCheck', user);
  res.json({ user });
});

route.delete('/logout', async (req, res) => {
  const { user } = req.session;
  for (let i = 1; i <= 20; i += 1) {
    await User_question.destroy({
      where: { user_id: user.id, question_id: i },
    });
  }

  req.session.destroy(() => {
    res.clearCookie('bears');
    res.sendStatus(200);
  });
});

module.exports = route;
