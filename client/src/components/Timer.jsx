import React, { useState, useEffect } from 'react';

const Timer = ({ fullWorkout }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setisActive] = useState(false);
  const [timeBased, setTimeBased] = useState(true);
  const [exCounter, setExCounter] = useState(0);

  const startWorkout = () => {
    setSeconds(fullWorkout[exCounter].time)
    setisActive(!isActive);

  }



    
  

  function reset() {
    setExCounter((count) => {
      let newCount = count +1
      console.log(fullWorkout[newCount])
      if (fullWorkout[newCount].time) {
        setTimeBased(true);
        setSeconds(fullWorkout[newCount].time)
        // console.log('timebased',fullWorkout[newCount])
      } else {
        // console.log(fullWorkout[newCount])
        setTimeBased(false);
      
      }
      return newCount
    });
    // setisActive(false);
  }

  useEffect(() => {
    console.log('working')
    let interval = null;

    if (isActive && timeBased) {
      interval = setInterval(() => {
        setSeconds((seconds) => {
          let newSeconds  = seconds - 1
          if (newSeconds < 1) {

            reset();
            // clearInterval(interval)
          }
          return newSeconds
        });

      }, 1000);
    } else if (isActive && !timeBased) {
      interval = setInterval(() => {
        console.log(seconds)
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      
    } 
    return () => {clearInterval(interval)};
  }, [isActive,timeBased]);



  return (
    <div className="app">
      <div className="time">{seconds}</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? 'active' : 'inactive'
          }`}
          onClick={startWorkout}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        {isActive ? (
          <div>
            {fullWorkout[exCounter].name} : {fullWorkout[exCounter].time}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Timer;
