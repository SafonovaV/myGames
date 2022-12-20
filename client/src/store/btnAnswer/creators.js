import * as tp from './type';
export function setVisiblebtnAnswer() {
  return { type: tp.SET_VISIBLE, payload: true };
}

export function setUnVisiblebtnAnswer() {
  return { type: tp.SET_UNVISIBLE, payload: false };
}
