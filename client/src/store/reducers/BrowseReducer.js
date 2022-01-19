import { GET_WORKOUTS_AND_EXERCISES } from '../types';

const iState = {
  workoutsAndExercises: [],
  addingWorkout: false,
  type: 'workouts',
  name: '',
  muscleGroup: ''
};
const BrowseReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_WORKOUTS_AND_EXERCISES:
      return { ...state, workoutsAndExercises: action.payload };
    default:
      return { ...state };
  }
};

export default BrowseReducer;
