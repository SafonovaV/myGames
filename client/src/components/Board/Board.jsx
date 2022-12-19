import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { initBoard, initTopics } from '../../store/board/creators';
import cl from './Board.module.css';
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

  return board.length && topics.length ? (
    <div className={cl.table}>
      {topics.map((top) => (
        <div key={top.id} className={cl.row}>
          <div className={cl.row_topic}>{top.topic}</div>
          {board
            .filter((el) => el.topic_id === top.id)
            .map((quest) => (
              <div key={quest.id} data-id={quest.id}>
                {quest.score}
              </div>
            ))}
        </div>
      ))}
    </div>
  ) : (
    <div>Масиив пустой</div>
  );
}

// <div>
//   <div className="container-fluid">
//     <div className="row">
//       <div className="board-head">
//         <div className="col-sm-6">Остановить игру</div>
//         <div className="col-sm-6">Очки</div>
//       </div>
//     </div>
//     {' '}
//     <div className="quest-wrap">
//       {' '}
//       <div className="container">
//         {' '}
//         <div className="quest-block">
//           <div className="topic"></div>
//            <div className="rangeOne"></div>
//            <div className="range"></div>
//            <div className="rangeOne"></div>
//            <div className="rangeOne"></div>
//            <div className="rangeOne"></div>
//           {' '}
//         </div>
//         {' '}
//       </div>
//       {' '}
//     </div>
//     {' '}
//   </div>
//    <h1>Board Page</h1>
//   {' '}
// </div>;
