import * as tp from './type';
const initialState = {
  modal: {
    visible: true,
    activQuestion: {},
  },
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case tp.SET_VISIBLE_TRUE:
      return { ...state, modal: { ...state.modal, visible: action.payload } };
    case tp.SET_VISIBLE_FALSE:
      return { ...state, modal: { ...state.modal, visible: action.payload } };
    case tp.INIT_ACTIV_QUESTION:
      return {
        ...state,
        modal: { ...state.modal, activQuestion: action.payload },
      };
    default:
      return state;
  }
}
