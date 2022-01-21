import React, { useEffect, useState } from 'react';
import Timer from '../components/Timer';
import { connect } from 'react-redux';
import {
  SetCountdownInterval,
  SetCountdown,
  SetCurrentExerciseIndex,
  SetWorkoutActive,
  SetFullWorkout
} from '../store/actions/TrainingActions';
import { useLocation } from 'react-router-dom';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    trainingState: state.trainingState,
    workoutActive: state.trainingState.timer.workoutActive,
    currentExerciseIndex: state.trainingState.timer.currentExerciseIndex,
    countdown: state.trainingState.timer.countdown,
    countdownInterval: state.trainingState.timer.countdownInterval
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setCountdownInterval: (countdownInterval) =>
      dispatch(SetCountdownInterval(countdownInterval)),
    setCountdown: (countdown) => dispatch(SetCountdown(countdown)),
    setCurrentExerciseIndex: (exerciseIndex) =>
      dispatch(SetCurrentExerciseIndex(exerciseIndex)),
    setWorkoutActive: (state) => dispatch(SetWorkoutActive(state)),
    setFullWorkout: (fullWorkout) => dispatch(SetFullWorkout(fullWorkout))
  };
};

const Training = ({
  workoutActive,
  currentExerciseIndex,
  countdown,
  countdownInterval,
  setWorkoutActive,
  setCurrentExerciseIndex,
  setCountdown,
  setCountdownInterval
}) => {
  const location = useLocation();
  const workout = location.state.workout;
  const exercises = workout.added_exercises;
  const allExercises = [];
  const [decison, SetDecision] = useState("hide-t-d")
  

  allExercises.push({ name: 'Warmup', time: 60 });
  exercises.forEach((exercise, index) => {
    for (let i = 0; i < exercise.sets; i++) {
      allExercises.push(exercise);

      if (i < exercise.sets - 1)
        allExercises.push({ name: 'Rest', time: exercise.rest });
    }
  });
  allExercises.push({ name: 'Cooldown', time: 60 });

  const getCurrentExercise = () => {
    return allExercises[currentExerciseIndex];
  };

  const startCountdownTimer = (startingTime, callback) => {
    let countdown = startingTime;
    setCountdown(countdown);

    let newInterval = setInterval(() => {
      countdown--;
      setCountdown(countdown);

      if (!countdown) {
        callback(newInterval);
      }
    }, 1000);

    setCountdownInterval(newInterval);
  };

  const stopCountdownTimer = () => {
    clearTimeout(countdownInterval);
  };

  const getCountdownFormatted = (seconds, section) => {
    var date = new Date(0);
    date.setSeconds(seconds);
    var timeString = date.toISOString().substring(section, section + 2);
    return timeString;
  };

  const startNextExercise = (nextExerciseIndex) => {
    setCurrentExerciseIndex(nextExerciseIndex);
    const currentExercise = allExercises[nextExerciseIndex];

    if (nextExerciseIndex >= allExercises.length) {
      setWorkoutActive(false);
      SetDecision('show-t-d')
      return;
    }

    if (currentExercise.time) {
      startCountdownTimer(currentExercise.time, (interval) => {
        startNextExercise(nextExerciseIndex + 1);
        clearInterval(interval);
      });
    }
  };

  return (
    <div className='training-container'>
      <Nav />
      <div className={`training-decision ${decison}`}>
        <div className={`t-d-popCard ${decison}`}>
          <h2>Do you want to add your experience to your journal?</h2>
          <div className="t-d-p-button">
            <Link to={'/journal'}><button className='btn-journal'>Add to Journal</button></Link>
            <Link to={'/'}><button className='btn-home'>Return Home</button></Link>
          </div>
        </div>
      </div>
      <div className="training">
        <h1>{allExercises[currentExerciseIndex]?.name || 'Workout Name'}</h1>
        <span className={getCurrentExercise()?.time ? 't-timer' : 't-reps'}>
          {!getCurrentExercise() ? (
            '00:00'
          ) : getCurrentExercise()?.time ? (
            <>
              <span>{getCountdownFormatted(countdown, 14)}</span>:
              <span>{getCountdownFormatted(countdown, 17)}</span>
            </>
          ) : (
            `${getCurrentExercise().reps} reps`
          )}
        </span>
        <button
          className="t-options"
          onClick={() => {
            if (!workoutActive) {
              setWorkoutActive(true);
              startNextExercise(0);
            } else {
              if (allExercises[currentExerciseIndex]?.time && countdown) {
                if (!countdownInterval) {
                  startCountdownTimer(countdown, (interval) => {
                    startNextExercise(currentExerciseIndex + 1);
                    clearInterval(interval);
                  });
                } else {
                  stopCountdownTimer();
                  setCountdownInterval(null);
                }
              } else if (allExercises[currentExerciseIndex]?.reps) {
                startNextExercise(currentExerciseIndex + 1);
              }
            }
          }}
        >
          {!getCurrentExercise()
            ? 'Restart'
            : !workoutActive
            ? 'Start'
            : allExercises[currentExerciseIndex]?.time
            ? countdownInterval
              ? 'Pause'
              : 'Resume'
            : allExercises[currentExerciseIndex]?.reps
            ? 'Next'
            : ''}
        </button>
        <button
          className="t-skip"
          onClick={() => {
            if (workoutActive && getCurrentExercise().time && countdown) {
              clearTimeout(countdownInterval);
              startNextExercise(currentExerciseIndex + 1);
            }
          }}
        >
          Skip
        </button>
        <div className="t-list">
          <div className="t-l-info">
            <p>Total Exercise: {allExercises.length}</p>
            <p>Exercise Left: {allExercises.length - currentExerciseIndex}</p>
          </div>
          <div className="t-l-array">
            <div className="t-l-a-child">
              <span className="t-l-a-c-text">#:</span>
              <span className="t-l-a-c-text">Name:</span>
              <span className="t-l-a-c-text">Type:</span>
            </div>
            {[...Array(5)].map((e, index) => (
              <div
                key={index}
                className="t-l-a-child"
                style={{
                  opacity: `${!index ? 100 : 95 - (index - 1) * 10}%`
                }}
              >
                <span className="t-l-a-c-text">
                  {index + currentExerciseIndex >= allExercises.length
                    ? null
                    : `${currentExerciseIndex + index + 1}.`}
                </span>
                <span className="t-l-a-c-text">
                  {allExercises[index + currentExerciseIndex]?.name ||
                    (index + currentExerciseIndex === allExercises.length
                      ? 'end'
                      : null)}
                </span>
                
                <span className="t-l-a-c-text">
                  {allExercises[index + currentExerciseIndex]?.time
                    ? `Time: ${`${getCountdownFormatted(
                        allExercises[index + currentExerciseIndex]?.time,
                        14
                      )}:${getCountdownFormatted(
                        allExercises[index + currentExerciseIndex]?.time,
                        17
                      )}`}`
                    : allExercises[index + currentExerciseIndex]?.reps
                    ? `Reps: ${
                        allExercises[index + currentExerciseIndex]?.reps
                      }`
                    : null}
                </span>
                <div
                  className={
                    index === 0 && currentExerciseIndex !== allExercises.length
                      ? 't-l-a-c-triangle'
                      : ''
                  }
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(Training);
