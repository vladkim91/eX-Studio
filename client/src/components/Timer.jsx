import React, { useState, useEffect } from 'react';

const Timer = ({ fullWorkout }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setisActive] = useState(false);
  const [inProgress, setInProgress] = useState(false)
  const [exCounter, setExCounter] = useState(-1);
  const [timer, setTimer] = useState(null)
  

  const toggle = () => {
    setisActive(!isActive);
  };
  const startWorkout = () => {
    toggle();
    setSeconds(fullWorkout[exCounter].time);
  };

  const completeSet = () => {
// Function that require user input for reps
    prompt('input amount of reps')
    setInProgress(false)
    toggle()
    setSeconds(fullWorkout[exCounter].time)
  }

  function reset() {
    setExCounter((count) => {
      let newCount = count + 1;
      // console.log(newCount)
      if (!fullWorkout[newCount].time) {
        setInProgress(true)
        toggle();
        // setSeconds(fullWorkout[newCount].time);
      } else {
        console.log(newCount)
        setSeconds(fullWorkout[newCount].time)
      
        // console.log(fullWorkout[newCount])
      }
      return newCount;
    });

  }
  const startNextExercise = () => {
    console.log('ex counter: ',exCounter)
 
    if (fullWorkout[exCounter + 1].time) {
      let seconds= fullWorkout[exCounter + 1].time;
      console.log(fullWorkout)
        let interval = setInterval(() => {
        seconds--
        console.log(seconds)
        if (!seconds) {
            console.log('seconds = 0')
            setExCounter(count => {
              let newCount = count + 1
              console.log(newCount)
              return newCount
            })
            // startNextExercise()
            
            clearInterval(interval)
          }
      }, 1000)
      setTimer(interval)
      
    }
   
  }
  useEffect(() => {
    startNextExercise()
  }, [exCounter])
  // useEffect(() => {
  //    let interval = null;
  //    if (isActive) {
  //      interval = setInterval(() => {
  //        setSeconds((seconds) => {
  //          let newSeconds = seconds - 1;
  //          if (newSeconds < 1) {
  //           console.log('anything')
  //           reset();
  //           setInProgress(false)
  //           // clearInterval(interval)
  //         }
  //         return newSeconds;
  //       });
  //     }, 1000);
  //   }
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [isActive]);

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
        {isActive && !inProgress ? (
          <div>
            {fullWorkout[exCounter ].name} : {fullWorkout[exCounter].time}
          </div>
        ) : null}
        {!isActive && inProgress ? <div>START YOUR SET {fullWorkout[exCounter - 1].name}<button onClick={completeSet}>
        Complete set
        </button></div> : null}
        <button onClick={startNextExercise}>Start next ex</button>
      </div>
    </div>
  );
};

export default Timer;
