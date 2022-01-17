import {
  TRAINING_SET_COUNTDOWN_INTERVAL,
  TRAINING_SET_COUNTDOWN,
  TRAINING_SET_CURRENT_EXERCISE_INDEX,
  TRAINING_SET_WORKOUT_ACTIVE,
  TRAINING_SET_FULL_WORKOUT
} from '../types';

const iState = {
  fullWorkout: [],
  timer: {
    workoutActive: false,
    currentExerciseIndex: 0,
    countdown: 0,
    countdownInterval: null
  }
};

const TrainingReducer = (state = iState, action) => {
  switch (action.type) {
    case TRAINING_SET_COUNTDOWN_INTERVAL:
      return {
        ...state,
        timer: { ...state.timer, countdownInterval: action.payload }
      };
    case TRAINING_SET_COUNTDOWN:
      return { ...state, timer: { ...state.timer, countdown: action.payload } };
    case TRAINING_SET_CURRENT_EXERCISE_INDEX:
      return {
        ...state,
        timer: { ...state.timer, currentExerciseIndex: action.payload }
      };
    case TRAINING_SET_WORKOUT_ACTIVE:
      return {
        ...state,
        timer: { ...state.timer, workoutActive: action.payload }
      };
    case TRAINING_SET_FULL_WORKOUT:
      return { ...state, fullWorkout: action.payload };
    default:
      return { ...state };
  }
};

export default TrainingReducer;
