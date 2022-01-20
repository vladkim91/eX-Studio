import {
  EDIT_FILTER_PARAMS,
  SCHEDULE_WORKOUT,
  GET_WORKOUTS_AND_EXERCISES
} from '../types';

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

export const EditFilterParams = (newFilter) => {
  return async (dispatch) => {
    dispatch({
      type: EDIT_FILTER_PARAMS,
      payload: newFilter
    });
  };
};

export const ScheduleWorkout = (userId, workoutId, day) => {
  return async (dispatch) => {
    dispatch({
      type: SCHEDULE_WORKOUT,
      payload: { userId, workoutId, day }
    });
  };
};
