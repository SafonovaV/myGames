import * as tp from './type';
const initialState = {
  btnAnswer: true,
};

export default function btnAnswerReducer(state = initialState, action) {
  switch (action.type) {
    case tp.SET_VISIBLE:
      return {
        ...state,
        btnAnswer: action.payload,
      };
    case tp.SET_UNVISIBLE:
      return {
        ...state,
        btnAnswer: action.payload,
      };
    default:
      return state;
  }
}
