/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initStatusQuestions } from '../../store/statusQuestions/creators';
import { setScore } from '../../store/UserScore/creators';
import cl from './Home.module.css';
import logo from './logo.png';
// import narodi from './narodi.jpeg'
import traditional from './traditional.jpg'
import different from './different.jpg'
import history from './history.jpg'
import quotes from './quotes.jpg'

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
          <div className="container px-4 px-lg-5 mb-5">            
            <div className="row gx-4 gx-lg-5 align-items-center my-5">
                  <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0 anim" src={logo} alt="logo" /></div>
                <div className="col-lg-5">
                    <h1 className="font-weight-light">Своя Игра</h1>
                    <p className="card-text fs-4">Суть игры заключается в том, что участник отвечает на вопросы различной стоимости, и тематики патаясь набрать большее кол-во баллов.</p>
                    <button type="button " className="btn btn-info" onClick={() => startGame()}>
                        Играть
                      </button>
                </div>
            </div>
            
            <div className="card text-white bg-primary my-5 py-2 text-center">
                <div className="card-body"><p className="text-white m-0"><h4>Наши темы подготовленные для вас!</h4></p></div>
            </div>
            
            <div className="row gx-4 gx-lg-5">
                <div className="col-md-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h4 className="card-title text-center">Ох уж эти нравы</h4>
                            <p className="card-text text-center">Традиции народов мира!</p> 

                            <figure className="figure">
                                <img src={traditional} className="card-img-top figure-img img-fluid rounded " />
                            </figure>

                        </div>                        
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h4 className="card-title text-center">Популярные цитаты</h4>
                            <p className="card-text text-center">Цитаты известных людей!</p>

                            <figure className="figure">
                                <img src={quotes} className="card-img-top figure-img img-fluid rounded" />
                            </figure>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h4 className="card-title text-center">Разное</h4>
                            <p className="card-text text-center">Вопросы на разнообразную тематику!</p>
                            <figure className="figure">
                                <img src={different} className="card-img-top figure-img img-fluid rounded" />
                            </figure>
                        </div>                        
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h4 className="card-title text-center">Любителям истории</h4>
                            <p className="card-text text-center">Исторические вопросы!</p>
                            <figure className="figure">
                                <img src={history} className="card-img-top figure-img img-fluid rounded" />
                            </figure>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        {/* <footer className="py-5 footer align-self-end">
            <div className="container px-4 px-lg-5"><p className="m-0 text-center text-white">Copyright &copy; Эльбрус Медвели олайн 2022</p></div>
        </footer>     */}
    </>
  );
}
