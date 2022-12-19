import React, { useState, useEffect } from 'react';
import cl from './Modal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setVisModalFalse } from '../../store/modal/creators';
import { setStatusTrue } from '../../store/statusQuestions/creators';
import { incrementScore } from '../../store/UserScore/creators';
import Timer from '../Timer/Timer';

export default function Modal() {
  const rootClasses = [cl.myModal];
  const visible = useSelector((store) => store.modal.modal.visible);
  const activQuestion = useSelector((store) => store.modal.modal.activQuestion);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({ answer: '' });
  const [validAnswer, setValidAnswer] = useState(null);
  const handleInput = (e) => {
    setInputValue((pre) => {
      return { ...pre, answer: e.target.value };
    });
  };
  useEffect(() => {
    console.log("USEEFFECT MODAL MOUNT");
    return () => console.log("USEEFFECT MODAL UN---MOUNT");
  }, [])
  const checkedAnswer = async () => {
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
          body: JSON.stringify(activQuestion),
        }
      );
      if (response.ok) {
        dispatch(setStatusTrue(activQuestion.id));
        dispatch(incrementScore(activQuestion.score));
      }
    }
  };

  if (visible) {
    rootClasses.push(cl.active);
  }
  const close = () => {
    dispatch(setVisModalFalse());
  };
  return (
    <div className={rootClasses.join(' ')}>
      <div className={cl.myModalContent}>
        <div className={cl.block1}>
          {/* <div>Таймер 30 секунд</div> */}
          <div className={cl.timerBlock}> <Timer initValue={30} /></div>
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
          <div>
            {' '}
            <img
              onClick={checkedAnswer}
              className={cl.img}
              src="/img/send.png"
              alt="ответить"
            />
          </div>
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
