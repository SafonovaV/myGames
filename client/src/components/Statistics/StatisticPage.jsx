import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function BackButton() {
  return (
    <NavLink to="/">
      <button>Назад</button>
    </NavLink>
  );
}

// let statistic = [ {
//     user_id: 1,
//     totalScore: 200,
//   },
//   {
//     user_id: 1,
//     totalScore: 400,
//   },
//   {
//     user_id: 1,
//     totalScore: 200,
//   },
//   {
//     user_id: 1,
//     totalScore: 600,
//   },
//   {
//     user_id: 1,
//     totalScore: 800,
//   },
//   {
//     user_id: 1,
//     totalScore: 400,
//   }
// ]


function StatisticPage() {
  const [statistic, setStatistic] = useState(null);

  useEffect(() => {
      (async() => { const response = await fetch('http://localhost:3100/statistic',{
        method: 'GET',
        credentials: 'include', //куки
      });
      const { allStatistics } = await response.json();
      setStatistic(allStatistics) 
    })()
  }, []);
  console.log(statistic);


  return (
    <div>
      <BackButton>Назад</BackButton>
      {statistic ? (
        <div>
          <h1>Статистика</h1>
          <table>
            <tr>
              <th>ID пользователя</th>
              <th>Общее количество очков</th>
            </tr>
            {statistic.map(item => (
              <tr key={item.id}>
                <td>{item.user_id}</td>
                <td>{item.totalScore}</td>
                
              </tr>
            ))}
          </table>
        </div>
      ) : (
        <div>Загрузка статистики...</div>
      )}
    </div>
  );
}

export default StatisticPage;

