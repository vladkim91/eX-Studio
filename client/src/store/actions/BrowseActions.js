import { EDIT_FILTER_PARAMS, GET_WORKOUTS_AND_EXERCISES } from '../types';

import {
  getWorkoutsAndExercises,
  editFilterParams
} from '../services/BrowseServices';

export const LoadWorkoutsAndExercises = (type, name, muscleGroup) => {
  return async (dispatch) => {
    const workoutsAndExercises = await getWorkoutsAndExercises(
      type,
      name,
      muscleGroup
    );
    dispatch({
      type: GET_WORKOUTS_AND_EXERCISES,
      payload: workoutsAndExercises
    });
  };
};

export const EditFilterParams = (filter, value) => {
  return async (dispatch) => {
    await editFilterParams(filter, value);

    dispatch({
      type: EDIT_FILTER_PARAMS,
      payload: {
        filter,
        value
      }
    });
  };
};
