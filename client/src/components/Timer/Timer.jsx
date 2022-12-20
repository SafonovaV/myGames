import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Timer({ initValue, setStat, timeOut }) {

  const [currentTime, setCurrentTime] = useState(initValue)

  

  let totalTime = initValue
  let timeValue = (100 - (currentTime / totalTime) * 100)

  useEffect(() => {
    if (currentTime === 0) {
      timeOut()
    }
  }, [currentTime])

  useEffect(() => {
    if (true) {

      const idInt = setInterval(() => {

        setCurrentTime((num3) => {
          if (num3 > 0) {
            return num3 - 1;
          }
          clearInterval(idInt);
          return num3;
        });


      }, 1000);

      return (() => { clearInterval(idInt) })
    }

  }, []);

  // useEffect(() => {
  //   if (currentTime === 0) {
  //     setCurrentTime(0);
  //     setTimeout(() => {
  //       // setStat(false)
  //       return
  //     }, 1000)
  //   } else {
  //     const timer = setTimeout(() => {
  //       setCurrentTime((value) => {
  //         value = value - 1
  //         return value
  //       })
  //     }, 1000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [currentTime])



  // Цвет полосы
  // let lineColor = '#D91E18'// красный
  let lineColor = '#37745B' // зеленый
  if (timeValue > 60) lineColor = '#D91E18'
  const styles =
    buildStyles({
      textSize: "20px",
      // Colors
      pathColor: lineColor,
      textColor: 'Black',
      // fontWeight: '800',
      fontWeight: '900',
      trailColor: '#d6d6d6',
      // trailColor: '#D91E18',
      backgroundColor: '#3e98c7',
    })

  return (
    <>
      <div className='progress-wrap'>
        <div className="circle">
          <CircularProgressbar value={timeValue} text={currentTime + ''} styles={styles} />
        </div>
      </div>
    </>
  );
}

export default Timer;