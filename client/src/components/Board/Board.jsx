import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import { initBoard, initTopics } from '../../store/board/creators';
import cl from './Board.module.css';

import { setVisModalTrue, initActivQuestion } from '../../store/modal/creators';
import { initStatusQuestions } from '../../store/statusQuestions/creators';
import { setScore } from '../../store/UserScore/creators';

import { Button, InputGroup } from 'react-bootstrap';

export default function Board() {
  const board = useSelector((store) => store.board.board);
  const topics = useSelector((store) => store.board.topics);
  const status = useSelector((store) => store.status.status);
  const score = useSelector((store) => store.score.score);

  const [timerStat, setTimerStat] = useState(false)// состояние таймера

  function startTimer() {
    setTimerStat(true)
  }

  function stopTimer() {
    setTimerStat(false)
  }
  console.log('score', score);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3100/boardApi', {
          method: 'GET',
          credentials: 'include',
        });
        const { allBord, allTopics } = await response.json();
        dispatch(initBoard(allBord));
        dispatch(initTopics(allTopics));
      } catch (error) {
        console.log(error);
      }
    })();

    (async () => {
      const response = await fetch('http://localhost:3100/game', {
        method: 'GET',
        credentials: 'include',
      });
      const { userScore, arrStatusQuestions } = await response.json();
      dispatch(initStatusQuestions(arrStatusQuestions));
      dispatch(setScore(userScore.totalScore));
    })();
  }, []);

  const getQuestion = (quest) => {
    dispatch(setVisModalTrue());
    dispatch(initActivQuestion(quest));
  };
  const destroyGame = async () => {
    const response = await fetch('http://localhost:3100/game', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: null,
    });
    if (response.ok) {
      navigate('/');
    }
  };

  return (
    <>
      <div className={cl.boardContent}>
        <div className={cl.boardHead}>
          <Button
            onClick={destroyGame}
            className={cl.bhBlock}
            type="button"
            variant="primary"
          >
            Остановить игру
          </Button>{' '}
          <InputGroup.Text
            className={cl.bhBlock}
            id="inputGroup-sizing-default"
          >
            Очков: {score}
          </InputGroup.Text>
          {/* <input defaultValue="Очков: 2100" className={cl.bhBlock} /> */}
        </div>
        {board.length && topics.length ? (
          <div className={cl.tableWrap}>
        <div className={cl.table}>
          {topics.map((top) => (
            <div key={top.id} className={cl.tableRow}>
              <div className={cl.row_topic}>{top.topic}</div>
              {board
                .filter((el) => el.topic_id === top.id)
                .map((quest) => (

                  <div className={cl.scoreBlock}>
                  <div  onClick={() => {
                      getQuestion(quest);
                    }} key={quest.id} data-id={quest.id}>

                    {quest.score}
                  </div>

                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div>Масиив пустой</div>
        )}

      <Modal />
      </div>
    </>
  );
}
