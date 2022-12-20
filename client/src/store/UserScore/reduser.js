import * as tp from './type';
const initialState = {
  score: null,
};

export default function UserScore(state = initialState, action) {
  switch (action.type) {
    case tp.SET_SCORE:
      return {
        score: action.payload,
      };
    case tp.INCREMENT_SCORE:
      return {
        ...state,

        score: state.score + action.payload,
      };

    case tp.DECREMENT_SCORE:
      return {
        ...state,
        score: state.score - action.payload,
      };

    default:
      return state;
  }
}
