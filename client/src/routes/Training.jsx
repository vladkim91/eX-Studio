import React, { useEffect } from 'react';
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

  allExercises.push({ name: 'Warmup', time: 5 });
  exercises.forEach((exercise, index) => {
    for (let i = 0; i < exercise.sets; i++) {
      allExercises.push(exercise);

      if (i < exercise.sets - 1)
        allExercises.push({ name: 'Rest', time: exercise.rest });
    }
  });
  allExercises.push({ name: 'Cooldown', time: 5 });

  const getCurrentExercise = () => {
    return allExercises[currentExerciseIndex];
  };

  const startNextExercise = (nextExerciseIndex) => {
    setCurrentExerciseIndex(nextExerciseIndex);
    const currentExercise = allExercises[nextExerciseIndex];

    if (nextExerciseIndex >= allExercises.length) {
      setWorkoutActive(false);
      return;
    }

    if (currentExercise.time) {
      let countdown = currentExercise.time;
      setCountdown(countdown);

      let newInterval = setInterval(() => {
        countdown--;
        setCountdown(countdown);

        if (!countdown) {
          startNextExercise(nextExerciseIndex + 1);
          clearInterval(newInterval);
        }
      }, 1000);

      setCountdownInterval(newInterval);
    }
  };

  return (
    <div>
      <Nav />
      <div className="training">
        <h1>{allExercises[currentExerciseIndex]?.name || 'Workout Name'}</h1>
        <span className="t-timer">
          {!getCurrentExercise()
            ? null
            : getCurrentExercise().time
            ? countdown
            : `${getCurrentExercise().reps} reps`}
        </span>
        <button
          className="t-options"
          onClick={() => {
            if (!workoutActive) {
              setWorkoutActive(true);
              startNextExercise(0);
            } else {
              if (allExercises[currentExerciseIndex].time && countdown) {
              } else if (allExercises[currentExerciseIndex].reps) {
                startNextExercise(currentExerciseIndex + 1);
              }
            }
          }}
        >
          {!workoutActive
            ? 'Start'
            : allExercises[currentExerciseIndex].time
            ? 'Pause'
            : allExercises[currentExerciseIndex].reps
            ? 'Done'
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
                    ? `Time: ${
                        allExercises[index + currentExerciseIndex]?.time
                      }`
                    : allExercises[index + currentExerciseIndex]?.reps
                    ? `Reps: ${
                        allExercises[index + currentExerciseIndex]?.reps
                      }`
                    : null}
                </span>
                <div className={index === 0 ? 't-l-a-c-triangle' : ''}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(Training);
