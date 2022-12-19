import * as tp from './type';
const initialState = {
  status: [],
};

export default function statusQuestions(state = initialState, action) {
  switch (action.type) {
    case tp.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case tp.CHANGE_STATUS_TRUE:
      return {
        ...state,

        status: state.status.map((el) => {
          if (el.question_id === action.payload) {
            el.status = true;
          }
          return el;
        }),
      };

    default:
      return state;
  }
}
