import React, { useState, useEffect } from 'react';
import cl from './Modal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setVisModalFalse } from '../../store/modal/creators';
import { setStatusTrue } from '../../store/statusQuestions/creators';
import Timer from '../Timer/Timer';
import { incrementScore, decrementScore } from '../../store/UserScore/creators';
import {
  setUnVisiblebtnAnswer,
  setVisiblebtnAnswer,
} from '../../store/btnAnswer/creators';

export default function Modal({ timerStat, stopTimer }) {
  console.log('▶ ⇛ timerStat', timerStat);
  const rootClasses = [cl.myModal];
  const visible = useSelector((store) => store.modal.modal.visible);
  const activQuestion = useSelector((store) => store.modal.modal.activQuestion);
  const btnAnswer = useSelector((store) => store.btnAnswer.btnAnswer);

  const score = useSelector((store) => store.score.score);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({ answer: '' });
  const [validAnswer, setValidAnswer] = useState(null);
  const handleInput = (e) => {
    setInputValue((pre) => {
      return { ...pre, answer: e.target.value };
    });
  };
  async function timeOut() {
    setValidAnswer(false);
    dispatch(setUnVisiblebtnAnswer());
    const response = await fetch(
      'http://localhost:3100/game/decscoreAndstatus',
      {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ activQuestion }),
      }
    );
    if (response.ok) {
      dispatch(decrementScore(activQuestion.score));
      dispatch(setStatusTrue(activQuestion.id));
      console.log('score', score);
    }
  }

  useEffect(() => {
    console.log('USEEFFECT MODAL MOUNT');
    return () => console.log('USEEFFECT MODAL UN---MOUNT');
  }, []);
  const checkedAnswer = async () => {
    dispatch(setUnVisiblebtnAnswer());
    stopTimer();
    if (
      inputValue.answer.toLowerCase().trim() ===
      activQuestion.answer.toLowerCase().trim()
    ) {
      setValidAnswer(true);
      const response = await fetch(
        'http://localhost:3100/game/scoreAndstatus',
        {
          method: 'PUT',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ activQuestion }),
        }
      );
      if (response.ok) {
        dispatch(incrementScore(activQuestion.score));
        dispatch(setStatusTrue(activQuestion.id));
      }
    } else {
      setValidAnswer(false);
      const response = await fetch(
        'http://localhost:3100/game/decscoreAndstatus',
        {
          method: 'PUT',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ activQuestion }),
        }
      );
      if (response.ok) {
        dispatch(decrementScore(activQuestion.score));
        dispatch(setStatusTrue(activQuestion.id));
        console.log('score', score);
      }
    }
  };

  if (visible) {
    rootClasses.push(cl.active);
  }
  const close = () => {
    dispatch(setVisiblebtnAnswer());
    dispatch(setVisModalFalse());
    console.log('CLOSE MODAL');
    stopTimer();
    setValidAnswer(null);
    setInputValue((pre) => {
      return { ...pre, answer: '' };
    });
  };
  return (
    <div className={rootClasses.join(' ')}>
      <div className={cl.myModalContent}>
        <div className={cl.block1}>
          {/* <div>Таймер 30 секунд</div> */}
          {timerStat && (
            <div className={cl.timerBlock}>
              {' '}
              <Timer initValue={15} timeOut={timeOut} />
            </div>
          )}
          <div>
            <img
              onClick={close}
              className={cl.img}
              src="/img/close.png"
              alt="закрыть"
            />
          </div>
        </div>
        <h4>Вопрос:</h4>
        <div>{activQuestion.question}</div>
        <div className={cl.block}>
          {' '}
          <input
            onChange={handleInput}
            value={inputValue.answer}
            name="answer"
            type="text"
            className={cl.myInput}
          />
          {btnAnswer && (
            <div>
              {' '}
              <img
                onClick={checkedAnswer}
                className={cl.img}
                src="/img/send.png"
                alt="ответить"
              />
            </div>
          )}
        </div>
        {validAnswer !== null && (
          <>
            {validAnswer ? (
              <div>
                <img src="/img/true.png" alt="верно" />
              </div>
            ) : (
              <div>
                <img src="/img/false.png" alt="неверно" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
