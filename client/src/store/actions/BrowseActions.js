import {
  EDIT_FILTER_PARAMS,
  EDIT_SCHEDULE_WORKOUT,
  GET_WORKOUTS_AND_EXERCISES,
  DELETE_SCHEDULED_WORKOUT,
  GET_WORKOUT_BY_ID
} from '../types';

import {
  getWorkoutsAndExercises,
  scheduleWorkout,
  deleteScheduledWorkoutByUserIdAndDay,
  getWorkoutById
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

export const DeleteScheduledWorkout = (userId, day) => {
  return async (dispatch) => {
    await deleteScheduledWorkoutByUserIdAndDay(userId, day);

    dispatch({
      type: DELETE_SCHEDULED_WORKOUT,
      payload: { userId, day }
    });
  };
};

export const GetWorkoutById = (id) => {
  return async (dispatch) => {
    const workout = await getWorkoutById(id);

    dispatch({
      type: GET_WORKOUT_BY_ID,
      payload: workout
    });
  };
};
