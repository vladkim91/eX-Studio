import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    trainingState: state.trainingState
  };
};

const mapActionsToProps = (dispatch) => {
  return {};
};

const Training = () => {
  const [fullWorkout, setFullWorkout] = useState([]);

  const workout = {
    id: 1,
    name: 'Chest Sprint day',
    user_id: null,
    muscle_groups: 'ch cd',
    image: 'images'
  };

  const exercises = [
    {
      id: 1,
      name: 'Bench press',
      user_id: null,
      workout_id: 1,
      muscle_group: 'ch',
      image: 'exerciseImage',
      sets: 3,
      reps: 12,
      weight: 135
    },
    {
      id: 2,
      name: 'Sprints',
      user_id: null,
      workout_id: 1,
      muscle_group: 'cd',
      image: 'exerciseImage',
      sets: 3,
      time: 60
    }
  ];

  const rest = {
    name: 'Break',
    time: 30
  };
  const longerRest = {
    time: 60,
    name: 'Long break'
  };
  const warmup = {
    name: 'Warmup',
    time: 5
  };
  useEffect(() => {
    const newFullWorkout = [];
    newFullWorkout.push(warmup);
    exercises.forEach((exercise, i) => {
      if (exercise.reps) {
        for (let i = 0; i < exercise.sets; i++) {
          newFullWorkout.push(exercise);
          if (i < exercise.sets - 1) {
            newFullWorkout.push({ ...rest });
          }
        }
        newFullWorkout.push(longerRest);
      } else if (exercise.time) {
        for (let i = 0; i < exercise.sets; i++) {
          newFullWorkout.push(exercise);
          if (i < exercise.sets - 1) {
            newFullWorkout.push({ ...rest });
          }
        }
        newFullWorkout.push(longerRest);
      }
    });
    setFullWorkout(newFullWorkout);
  }, []);

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
      <Timer fullWorkout={fullWorkout} />

      {/* <button className="start-workout">Start Workout</button> */}
    </div>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(Training);
