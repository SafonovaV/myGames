import React, { useEffect, useState } from "react";




export default function Board() {
  const initialBoard = [];
  console.log("MOUNT BOARD");
  const [board, setBoard] = useState(initialBoard);

  useEffect(() => {
    console.log('App Board');
    (async () => {
      // setLoading(true);
      const response = await fetch('http://localhost:3100/boardApi');
      const data = await response.json();
      console.log("▶ ⇛ data", data);
      setBoard(data);
      // setLoading(false);
      console.log("▶ ⇛ oneBlock", board);
    })();
  }, []);


  if (board)
    return (<div>
      <div className="container-fluid">
        <div className="row">
          <div className="board-head">
            <div className="col-sm-6">Остановить игру</div>
            <div className="col-sm-6">Очки</div>
          </div>
        </div>

        <div className="quest-wrap">
          <div className="container">
            <div className="quest-block">
              <div className="topic"></div>
              <div className="rangeOne"></div>
              <div className="range"></div>
              <div className="rangeOne"></div>
              <div className="rangeOne"></div>
              <div className="rangeOne"></div>
            </div>
          </div>
        </div>


      </div>
      <h1>
        Board Page
      </h1>
    </div>);
}
