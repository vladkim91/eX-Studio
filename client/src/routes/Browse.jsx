import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { LoadWorkoutsAndExercises } from '../store/actions/BrowserActions';

const mapStateToProps = ({ workoutAndExercisesState }) => {
  return workoutAndExercisesState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWorkoutsAndExercises: () => dispatch(LoadWorkoutsAndExercises())
  };
};


const Browse = ({workoutsAndExercisesState, fetchWorkoutsAndExercises}) => {
  useEffect(() => {
    fetchWorkoutsAndExercises();
  }, [])
  const workoutsAndExercises = workoutsAndExercisesState
  console.log(workoutsAndExercises)
  return <div></div>;
};

export default connect_timeout(mapStateToProps, mapDispatchToProps)(Browse);
