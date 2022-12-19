import React from 'react';
// import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
      const { userScore, arrStatusQuestions } = response.json();
      dispatch()
    })();
  };

  return (
    <>
      <div>
        Главная страница!
        <button type="button" onClick={() => navigate('/board')}>
          Играть
        </button>
      </div>
    </>
  );
}
