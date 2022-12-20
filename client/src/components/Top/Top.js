import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function parseDate(createdAt) {
  const date = new Date(Date.parse(createdAt));
  return date;
}

function Top() {
  const [allTop, setAllTop] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3100/boardApi/stat', {
        method: 'GET',
        credentials: 'include', //куки
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const allRaiting = await response.json();
      console.log("statistic ", allRaiting);
      setAllTop(allRaiting)
    })();
  }, []);

  return (
    <>
      <div className="container-sm w-50">
        {allTop?.length > 0 ? (
          <div>
            <h1 className="text-center">Top 5 игроков</h1>
            <table className="table table-striped table-bordered border-primary">
              <thead>
                <tr className="table-primary">
                  {/* <th>ID пользователя</th> */}
                  <th>Имя</th>
                  <th>Лучшая игра</th>
                </tr>
              </thead>
              <tbody>
                {allTop.map((item) => (
                  <tr key={item.user_id}>
                    {/* <td>{item.user_id}</td> */}
                    <td>{item['User.login']}</td>
                    <td>{item.max}</td>
                  </tr>
                ))}
              </tbody>
              <tbody>

                {/* {statistic.map((item) => (
                  <tr key={item.id}>
                    
                    <td>{item.totalScore}</td>
                    <td>{parseDate(item.createdAt).toLocaleString()}</td>
                  </tr>
                ))} */}

              </tbody>
            </table>
          </div>
        ) : (
          <h3 className="text-center">У вас пока нет статистики ...</h3>
        )}
      </div>
    </>
  );
}

export default Top;
