import * as tp from './type';

export const initBoard = (allQuestions) => {
  return { type: tp.INIT_BOARD, payload: allQuestions };
};

export const initTopics = (allTopics) => {
  return { type: tp.INIT_TOPICS, payload: allTopics };
};
