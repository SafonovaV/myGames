const express = require('express');
const app = express();
require('@babel/register');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const authRouter = require('./routes/authRouter');
const statRouter = require('./routes/statRouter');
const board = require('./routes/board');
const gameRoute = require('./routes/gameRoute');

//импорт вспомогательных ф-й
const dbCheck = require('../db/dbCheck');

// вызов функции проверки соединения с базоый данных
dbCheck();

//подключаем сессию и файлсторадже для хранения куки
const session = require('express-session');
const FileStore = require('session-file-store')(session);

// ! подключаем сессию и файлсторадже для хранения куки в РЕАКТЕ
const corsOptions = {
  credentials: true,
  origin: 'http://localhost:3000',
};

// app.use(cors());
app.use(cors(corsOptions));
app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//создаем куки
// время жизни cookies, ms (10 дней)
const sessionConfig = {
  name: 'bears',
  store: new FileStore({}),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 10,
  },
};

// мидлварка для сессии
app.use(session(sessionConfig));
app.use('/', authRouter);
app.use('/statistic', statRouter);
app.use('/boardApi', board);
app.use('/game', gameRoute);

const PORT = process.env.PORT || 3101;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
