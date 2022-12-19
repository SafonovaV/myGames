import React, { useEffect, useState } from "react";


const initialBoard = [];


export default function Board() {
  const [board, setBoard] = useState(initialBoard);

  useEffect(() => {
    console.log('App Board');
    (async () => {
      // setLoading(true);
      const response = await fetch('http://localhost:3100/posts');
      const data = await response.json();
      setBoard(data.allPosts);
      // setLoading(false);
    })();
  }, []);


  return (<div>
    <h1>
      Board Page
    </h1>
  </div>);
}
