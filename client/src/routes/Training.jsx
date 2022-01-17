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

const mapStateToProps = (state) => {
  return {
    trainingState: state.trainingState
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    timerActions: {
      setCountdownInterval: (countdownInterval) =>
        dispatch(SetCountdownInterval(countdownInterval)),
      setCountdown: (countdown) => dispatch(SetCountdown(countdown)),
      setCurrentExerciseIndex: (exerciseIndex) =>
        dispatch(SetCurrentExerciseIndex(exerciseIndex)),
      setWorkoutActive: (state) => dispatch(SetWorkoutActive(state))
    },
    setFullWorkout: (fullWorkout) => dispatch(SetFullWorkout(fullWorkout))
  };
};

const Training = (props) => {
  const setFullWorkout = props.setFullWorkout;
  const location = useLocation();
  const workout = location.state.workout;
  const exercises = workout.exercises;
  const fullWorkout = [];

  exercises.forEach((exercise) => {
    for (let i = 0; i < exercise.sets; i++) {
      fullWorkout.push(exercise);
    }
  });

  return (
    <div>
      {workout.name}
      <hr />
      <div>
        {fullWorkout.map((exercise, i) => {
          return exercise.name ? (
            <div key={i}>
              <p>{exercise.name}</p>
            </div>
          ) : (
            <div key={i}>
              <p>Break</p>
            </div>
          );
        })}
      </div>
      <br />
      <Timer
        fullWorkout={fullWorkout}
        trainingState={props.trainingState}
        {...props.timerActions}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(Training);
