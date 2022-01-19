import { GET_WORKOUTS_AND_EXERCISES } from '../types';

import { getWorkoutsAndExercises } from '../services/BrowseServices';

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

// export const
