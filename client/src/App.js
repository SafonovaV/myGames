import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Board from './components/Board/Board'
import Login from './components/Login/Login';
import Top from './components/Top/Top';
import { initAuthAC, setNullAC } from './store/auth/creators';
import StatisticPage from './components/Statistics/StatisticPage';
import Footer from './components/Footer/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3100/checkAuth', {
          method: 'GET',
          credentials: 'include',
        });
        const { user } = await response.json();
        if (user) {
          dispatch(initAuthAC(user));
        } else {
          dispatch(setNullAC());
        }
      } catch (error) {
        console.log(error);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/statistic" element={<StatisticPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="/top" element={<Top />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
