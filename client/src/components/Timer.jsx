import React, { useState } from 'react';

const Timer = ({ fullWorkout }) => {
  const [workoutActive, setWorkoutActive] = useState(false);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [countdownInterval, setCountdownInterval] = useState(null);

  const getCurrentExercise = () => {
    return fullWorkout[currentExerciseIndex];
  };

  const startNextExercise = (nextExerciseIndex) => {
    if (nextExerciseIndex >= fullWorkout.length) {
      setWorkoutActive(false);
      return;
    }

    setCurrentExerciseIndex(nextExerciseIndex);
    const currentExercise = fullWorkout[nextExerciseIndex];

    if (currentExercise.time) {
      let countdown = currentExercise.time;
      setCountdown(countdown);

      let newInterval = setInterval(() => {
        countdown--;
        setCountdown(countdown);

        if (!countdown) {
          if (nextExerciseIndex + 1 < fullWorkout.length) {
            startNextExercise(nextExerciseIndex + 1);
          }

          clearInterval(newInterval);
        }
      }, 1000);

      setCountdownInterval(newInterval);
    }
  };

  return (
    <div className="app">
      <p>
        {(!workoutActive && currentExerciseIndex) >= fullWorkout.length - 1
          ? '[WORKOUT COMPLETE]'
          : ''}
      </p>
      <div className="time">
        {workoutActive && getCurrentExercise().time ? countdown : null}
      </div>
      {workoutActive && (
        <p>{`Current Exercise: ${getCurrentExercise().name}`}</p>
      )}
      <div className="row">
        {!workoutActive && (
          <button
            onClick={() => {
              setWorkoutActive(true);
              startNextExercise(0);
            }}
          >
            Start Workout
          </button>
        )}
        {workoutActive && getCurrentExercise().time && (
          <button
            onClick={() => {
              clearInterval(countdownInterval);
              startNextExercise(currentExerciseIndex + 1);
            }}
          >
            Finish Early
          </button>
        )}
        {workoutActive && !getCurrentExercise().time && (
          <button
            onClick={() => {
              startNextExercise(currentExerciseIndex + 1);
            }}
          >
            Finish Exercise
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
