import * as tp from './type';
export function setVisModalTrue() {
  return { type: tp.SET_VISIBLE_TRUE, payload: true };
}

export function setVisModalFalse() {
  return { type: tp.SET_VISIBLE_FALSE, payload: false };
}

export function initActivQuestion(activQuestion) {
  return { type: tp.INIT_ACTIV_QUESTION, payload: activQuestion };
}
