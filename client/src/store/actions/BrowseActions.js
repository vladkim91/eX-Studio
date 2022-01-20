import {
  EDIT_FILTER_PARAMS,
  SCHEDULE_WORKOUT,
  EDIT_SCHEDULE_WORKOUT,
  GET_WORKOUTS_AND_EXERCISES
} from '../types';

import {
  getWorkoutsAndExercises,
  scheduleWorkout
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
  return {
    type: EDIT_FILTER_PARAMS,
    payload: newFilter
  };
};

export const EditScheduleWorkout = (userId, workoutId, day) => {
  return {
    type: EDIT_SCHEDULE_WORKOUT,
    payload: { userId, workoutId, day }
  };
};

export const ScheduleWorkout = (newSchedule) => {
  return async () => {
    await scheduleWorkout(newSchedule);
  };
};
