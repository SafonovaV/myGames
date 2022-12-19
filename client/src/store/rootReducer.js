import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import errorAuthReducer from './errorAuth/reducer';

export default combineReducers({
  isAuth: authReducer,
  errorAuth: errorAuthReducer,
});
