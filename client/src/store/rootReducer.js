import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import errorAuthReducer from './errorAuth/reducer';
import modalReducer from './modal/reducer';
import boardReducer from './board/reducer';
import userScoreReducer from './UserScore/reduser';
import statusQuestionsReduser from './statusQuestions/reducer';
import btnAnswerReducer from './btnAnswer/reducer';
export default combineReducers({
  isAuth: authReducer,
  errorAuth: errorAuthReducer,
  modal: modalReducer,
  board: boardReducer,
  score: userScoreReducer,
  status: statusQuestionsReduser,
  btnAnswer: btnAnswerReducer,
});
