import * as tp from './type';
export function initAuthAC(user) {
  return { type: tp.INIT_AUTH, payload: user };
}

export function setNullAC() {
  return { type: tp.SET_NULL, payload: null };
}
