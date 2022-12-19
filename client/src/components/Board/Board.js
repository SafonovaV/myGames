import React, { useEffect, useState } from "react";


const initialBoard = [];


export default function Board() {
  const [board, setBoard] = useState(initialBoard);

  useEffect(() => {
    console.log('App Board');
    (async () => {
      // setLoading(true);
      const response = await fetch('http://localhost:3100/boardApi');
      const data = await response.json();
      console.log("▶ ⇛ data", data);
      setBoard(data.allPosts);
      // setLoading(false);
    })();
  }, []);


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
          <div className="quest-block"></div>
        </div>
      </div>


    </div>
    <h1>
      Board Page
    </h1>
  </div>);
}
