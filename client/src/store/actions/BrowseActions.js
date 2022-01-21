import {
  EDIT_FILTER_PARAMS,
  EDIT_SCHEDULE_WORKOUT,
  GET_WORKOUTS_AND_EXERCISES,
  DELETE_SCHEDULED_WORKOUT
} from '../types';

import {
  getWorkoutsAndExercises,
  scheduleWorkout,
  deleteScheduledWorkoutByUserIdAndDay
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
