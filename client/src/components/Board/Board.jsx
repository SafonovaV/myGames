import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { initBoard, initTopics } from '../../store/board/creators';
import cl from './Board.module.css';
import { Button, InputGroup } from 'react-bootstrap';

export default function Board() {
  const board = useSelector((store) => store.board.board);
  const topics = useSelector((store) => store.board.topics);
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
        console.log('topics', topics);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className={cl.boardContent}>
        <div className={cl.boardHead}>
          <Button className={cl.bhBlock} type="button" variant="primary">Остановить игру</Button>{' '}
          <InputGroup.Text className={cl.bhBlock} id="inputGroup-sizing-default">
            Очков: {'200'}
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
                  <div key={quest.id} data-id={quest.id}>
                    {quest.score}
                  </div>

                  </div>
                ))}
            </div>
          ))}
        </div>
          </div>

      ) : (
        <div>Масиив пустой</div>
      )}
      </div>
    </>
  );
}
