import { GET_WORKOUTS_AND_EXERCISES, EDIT_FILTER_PARAMS } from '../types';

const iState = {
  workoutsAndExercises: [],
  filter: { type: 'workouts', name: '', muscleGroup: 'ch tr' },
  addingWorkout: false
};
const BrowseReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_WORKOUTS_AND_EXERCISES:
      return { ...state, workoutsAndExercises: action.payload };
    case EDIT_FILTER_PARAMS:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.filter]: action.payload.value
        }
      };
    default:
      return { ...state };
  }
};

export default BrowseReducer;
