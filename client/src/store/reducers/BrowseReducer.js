import {
  SCHEDULE_WORKOUT,
  GET_WORKOUTS_AND_EXERCISES,
  EDIT_FILTER_PARAMS
} from '../types';

const iState = {
  workoutsAndExercises: [],
  filter: { type: 'workouts', name: '', muscleGroup: '' },
  addingWorkout: false,
  schedule: { userId: null, workoutId: null, day: null }
};
const BrowseReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_WORKOUTS_AND_EXERCISES:
      return { ...state, workoutsAndExercises: action.payload };
    case EDIT_FILTER_PARAMS:
      return {
        ...state,
        filter: action.payload
      };
    case SCHEDULE_WORKOUT:
      return {
        ...state,
        schedule: action.payload
      };
    default:
      return { ...state };
  }
};

export default BrowseReducer;
