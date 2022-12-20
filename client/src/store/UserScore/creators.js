import * as tp from './type';
export function setScore(score) {
  return { type: tp.SET_SCORE, payload: score };
}

export function incrementScore(score) {
  return { type: tp.INCREMENT_SCORE, payload: score };
}

export function decrementScore(score) {
  return { type: tp.DECREMENT_SCORE, payload: score };
}
