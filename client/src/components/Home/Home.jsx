import React from 'react';
// import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initStatusQuestions } from '../../store/statusQuestions/creators';
import { setScore } from '../../store/UserScore/creators';

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const startGame = async () => {
    (async () => {
      const response = await fetch('http://localhost:3100/game/new', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: null,
      });
      const { userScore, arrStatusQuestions } = await response.json();
      dispatch(initStatusQuestions(arrStatusQuestions));
      dispatch(setScore(userScore.totalScore));
      navigate('/board');
    })();
  };

  return (
    <>
      <div>
        Главная страница!
        <button type="button" onClick={() => startGame()}>
          Играть
        </button>
      </div>
    </>
  );
}
