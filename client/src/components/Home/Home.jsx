import React from 'react';
// import Modal from '../Modal/Modal';
import { useNavigate, useParams } from "react-router-dom";
import { Routes, Route, Outlet } from 'react-router-dom'
import Board from '../Board/Board'

export default function Home() {
  const navigate = useNavigate();
  return (<>

    <div>Главная страница!
      <button type="button" onClick={() => navigate('/board')}>Играть</button>
    </div>
  </>)
}
