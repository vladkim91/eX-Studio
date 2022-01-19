import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { LoadWorkoutsAndExercises } from '../store/actions/BrowseActions';

const mapStateToProps = (state) => {
  return { 
    workoutAndExercisesState: state.workoutAndExercisesState
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    fetchWorkoutsAndExercises: (type, name, muscleGroup) =>
      dispatch(LoadWorkoutsAndExercises(type, name, muscleGroup))
  };
};

const Browse = ({fetchWorkoutsAndExercises,workoutAndExercisesState}) => {
  const state = {
    type: 'workouts',
    name: '',
    muscleGroup: 'bk'
  };
  useEffect(() => {
    fetchWorkoutsAndExercises(state.type, state.name, state.muscleGroup);
    
  }, []);
  return (<div>{
 

    }</div>);
};

export default connect(mapStateToProps, mapActionsToProps)(Browse);
