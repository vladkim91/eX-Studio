const iState = {
  workout: [],
  timer: {
    workoutActive: false,
    currentExerciseIndex: 0,
    countdown: 0,
    countdownInterval: null
  }
};

const TrainingReducer = (state = iState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default TrainingReducer;
