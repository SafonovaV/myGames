import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import errorAuthReducer from './errorAuth/reducer';
import modalReducer from './modal/reducer';
import boardReducer from './board/reducer';
import useScoreReducer from './UserScore/reduser';

export default combineReducers({
  isAuth: authReducer,
  errorAuth: errorAuthReducer,
  modal: modalReducer,
  board: boardReducer,
  score: useScoreReducer,
});
