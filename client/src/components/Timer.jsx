import React, { useState, useEffect } from 'react';

const Timer = ({ fullWorkout }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setisActive] = useState(false);
  const [timeBased, setTimeBased] = useState(true)
  const [timers, setTimers] = useState([])
  const [exCounter, setExCounter] = useState(0)


  const timeArray = fullWorkout.map(e => (
  (e.time) ? {name: e.name, time: e.time} : {name: e.name, reps : e.reps}
    ))
  useEffect(() => {
    setSeconds(timeArray[exCounter].time)
  }, [])
  // let timers;
  function toggle() { 
    setisActive(!isActive);
    
  }

  function reset() {
    setExCounter(count => count + 1)
    setisActive(false);
  }

  useEffect(() => {
    let interval = null;

    if (isActive && timeBased) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      if (seconds < 1) {
       toggle()
       reset()      
      }
    } else if (!isActive && seconds == 0) {
  
 
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">{seconds}</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? 'active' : 'inactive'
          }`}
          onClick={toggle}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        {isActive ? <div>{timeArray[0].name} : {timeArray[0].time}</div> : null}
      </div>
    </div>
  );
};

export default Timer;
