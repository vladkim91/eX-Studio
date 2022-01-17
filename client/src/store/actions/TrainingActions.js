import {
  TRAINING_SET_COUNTDOWN_INTERVAL,
  TRAINING_SET_COUNTDOWN,
  TRAINING_SET_CURRENT_EXERCISE_INDEX,
  TRAINING_SET_WORKOUT_ACTIVE
} from '../types';

export const SetCountdownInterval = (countdownInterval) => {
  return {
    type: TRAINING_SET_COUNTDOWN_INTERVAL,
    payload: countdownInterval
  };
};

export const SetCountdown = (countdown) => {
  return {
    type: TRAINING_SET_COUNTDOWN,
    payload: countdown
  };
};

export const SetCurrentExerciseIndex = (exerciseIndex) => {
  return {
    type: TRAINING_SET_CURRENT_EXERCISE_INDEX,
    payload: exerciseIndex
  };
};

export const SetWorkoutActive = (state) => {
  return {
    type: TRAINING_SET_WORKOUT_ACTIVE,
    payload: state
  };
};
