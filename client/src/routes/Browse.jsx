import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { LoadWorkoutsAndExercises, setFilterParams} from '../store/actions/BrowseActions';

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

const Browse = ({ fetchWorkoutsAndExercises, workoutAndExercisesState }) => {

  useEffect(() => {
    fetchWorkoutsAndExercises(workoutAndExercisesState.type, workoutAndExercisesState.name, workoutAndExercisesState.muscleGroup);
  }, []);
  return <div></div>;
};

export default connect(mapStateToProps, mapActionsToProps)(Browse);
