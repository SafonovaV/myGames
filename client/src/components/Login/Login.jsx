import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initAuthAC } from '../../store/auth/creators';
import {
  setErrAuthTrueAC,
  setErrAuthFalseAC,
} from '../../store/errorAuth/creators';
import cl from './Login.module.css';

export default function Login() {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorAuth = useSelector((store) => store.errorAuth.errorAuth);
  const auth = async (e) => {
    e.preventDefault();
    const { password, email } = e.target;
    const response = await fetch('http://localhost:3100/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password.value,
        email: email.value,
      }),
    });
    const { user } = await response.json();
    console.log('user', user);

    if (user) {
      dispatch(initAuthAC(user));
      dispatch(setErrAuthFalseAC());
      navigate('/');
    } else dispatch(setErrAuthTrueAC());
  };

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormValue((currentValue) => {
      return { ...currentValue, [name]: value };
    });
  };

  return (
    <Form className="container" onSubmit={auth}>
      {errorAuth && <div className={cl.error}>Неверный логин или паролль</div>}
      <Form.Group className="mb-3">
        <Form.Control
          name="email"
          value={formValue.email}
          onChange={handleInput}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          name="password"
          value={formValue.password}
          onChange={handleInput}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
