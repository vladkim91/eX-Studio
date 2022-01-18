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

  /*
  WORKOUT:
    -bench | 3 sets, 10 reps
    -rest | 30 seconds
    -bench | 3 sets, 10 reps
    -rest | 30 seconds
    -bench | 3 sets, 10 reps // Finish exercise
    // Start next exercise : 3 sets of pushups
    -pushups | 3 sets, 10 reps
  */

  fullWorkout.push({ name: 'Warmup', time: 5 });
  exercises.forEach((exercise) => {
    for (let i = 0; i < exercise.sets; i++) {
      fullWorkout.push(exercise);

      if (i < exercise.sets - 1) {
        fullWorkout.push({ name: 'Rest', time: 30 });
      }
    }
  });

  return (
    <div>
      <Nav />
    <div className='training'>
      <h1>Exercise Name</h1>
      <span className="t-timer">00:27</span>
      <button className='t-options'>Start</button>
      <button className='t-skip'>Skip</button>
      <div className="t-list">
      <div className="t-l-info">
        <p>Total Exercise: 10</p>
        <p>Exercise Left: 7</p>
        
      </div>
      </div>

    </div>
    </div>







    //   {/* {workout.name}
      
    //   <div>
    //     {fullWorkout.map((exercise, i) => {
    //       return exercise.name ? (
    //         <div key={i}>
    //           <p>{exercise.name}</p>
    //         </div>
    //       ) : (
    //         <div key={i}>
    //           <p>Break</p>
    //         </div>
    //       );
    //     })}
    //   </div>
    //   <br />
    //   <Timer
    //     fullWorkout={fullWorkout}
    //     trainingState={props.trainingState}
    //     {...props.timerActions}
    //   /> */}
    // {/* </div> */}
  );
};

export default connect(mapStateToProps, mapActionsToProps)(Training);
