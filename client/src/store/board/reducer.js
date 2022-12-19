import * as tp from './type';
const initialState = {
  board: [],
  topics: [],
};

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case tp.INIT_BOARD:
      return { ...state, board: action.payload };
    case tp.INIT_TOPICS:
      return { ...state, topics: action.payload };
    default:
      return state;
  }
}
