import React from 'react';
import cl from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setNullAC } from '../../store/auth/creators';
import { setErrAuthFalseAC } from '../../store/errorAuth/creators';
export default function NavBar() {
  const isAuth = useSelector((store) => store.isAuth.isAuth);
  const dispatch = useDispatch();
  const logout = async () => {
    const response = await fetch('http://localhost:3100/logout', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: null,
    });

    if (response.ok) {
      dispatch(setNullAC());
      dispatch(setErrAuthFalseAC());
    }
  };

  return (
    <nav className={cl.nav}>
      {isAuth ? (
        <ul className={cl.nav_ul}>
          {' '}
          <li>
            {' '}
            <NavLink to="/statistic" className={cl.nav_navLink}>
              Статистика, {isAuth.name}
            </NavLink>
          </li>{' '}
          <li>
            <NavLink onClick={logout} to="/signup" className={cl.nav_navLink}>
              Выйти
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className={cl.nav_ul}>
          <li>
            {' '}
            <NavLink to="/" className={cl.nav_navLink}>
              Главная{' '}
            </NavLink>
          </li>
          <li>
            <NavLink className={cl.nav_navLink}>Войти </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className={cl.nav_navLink}>
              Регистрация{' '}
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
