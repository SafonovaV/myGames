import React from 'react';
// import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

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
