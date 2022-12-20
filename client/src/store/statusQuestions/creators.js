import * as tp from './type';

export function initStatusQuestions(arrStatusQuestions) {
  return { type: tp.SET_STATUS, payload: arrStatusQuestions };
}

export function setStatusTrue(id) {
  return { type: tp.CHANGE_STATUS_TRUE, payload: id };
}
