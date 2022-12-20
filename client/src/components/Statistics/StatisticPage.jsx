import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => {
        navigate(-1);
      }}
    >
      Назад
    </button>
  );
}

function parseDate(createdAt) {
  const date = new Date(Date.parse(createdAt));
  return date;
}

function StatisticPage() {
  const [statistic, setStatistic] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3100/statistic', {
        method: 'GET',
        credentials: 'include', //куки
      });
      const { allStatistics } = await response.json();
      setStatistic(allStatistics);
      // console.log(statistic);
    })();
  }, []);

  return (
    <>
      <div className="container-sm">
        <BackButton>Назад</BackButton>
        {statistic !== null && statistic.length > 0 ? (
          <div>
            <h1 className="text-center">Статистика</h1>
            <table className="table table-striped table-bordered border-primary">
              <thead>
                <tr className="table-primary">
                  {/* <th>ID пользователя</th> */}
                  <th>Общее количество очков</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                {statistic.map((item) => (
                  <tr key={item.id}>
                    {/* <td>{item.user_id}</td> */}
                    <td>{item.totalScore}</td>
                    <td>{parseDate(item.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
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

export default StatisticPage;
