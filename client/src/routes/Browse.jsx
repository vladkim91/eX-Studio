
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  LoadWorkoutsAndExercises,
  EditFilterParams
} from '../store/actions/BrowseActions';


const mapStateToProps = (state) => {
  return {
    workoutAndExercisesState: state.workoutAndExercisesState
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    fetchWorkoutsAndExercises: (type, name, muscleGroup) =>
      dispatch(LoadWorkoutsAndExercises(type, name, muscleGroup)),
    editFilterParams: (filter, value) =>
      dispatch(EditFilterParams(filter, value))
  };
};

const Browse = ({
  fetchWorkoutsAndExercises,
  workoutAndExercisesState,
  editFilterParams
}) => {
  useEffect(() => {
    fetchWorkoutsAndExercises(
      workoutAndExercisesState.filter.type,
      workoutAndExercisesState.filter.name,
      workoutAndExercisesState.filter.muscleGroup
    );
  }, []);
  const clickHandler = () => {
    editFilterParams('muscleGroup', 'ch');
  };

  return (
    <div>
      <button onClick={clickHandler}>Update filter params state</button>
    </div>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(Browse);
