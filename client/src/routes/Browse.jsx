import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { LoadWorkoutsAndExercises } from '../store/actions/BrowserActions';

const mapStateToProps = ({ workoutAndExercisesState }) => {
  return workoutAndExercisesState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWorkoutsAndExercises: (type, name, muscleGroup) => dispatch(LoadWorkoutsAndExercises(type, name, muscleGroup))
  };
};


const Browse = ({workoutsAndExercisesState, fetchWorkoutsAndExercises}) => {
  const state = {
    type : 'exercises',
    name : 'Kettlebell',
    muscleGroup: 'fb'
  }
  useEffect(() => {
    fetchWorkoutsAndExercises(state.type, state.name, state.muscleGroup);
  }, [])
  const workoutsAndExercises = workoutsAndExercisesState
  console.log(workoutsAndExercises)
  return <div></div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
