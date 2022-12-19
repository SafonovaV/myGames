import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import errorAuthReducer from './errorAuth/reducer';
import modalReducer from './modal/reducer';
import boardReducer from './board/reducer';

export default combineReducers({
  isAuth: authReducer,
  errorAuth: errorAuthReducer,
  modal: modalReducer,
  board: boardReducer,
});
