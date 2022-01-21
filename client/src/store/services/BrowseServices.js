import Client from '.';

export const getWorkoutsAndExercises = async (type, name, muscleGroup) => {
  const result = await Client.get(
    `exercise/filter?type=${type}&muscle_group=${muscleGroup}&name=${name}`
  );
  return result.data;
};

export const scheduleWorkout = async (scheduleWorkout) => {
  const result = await Client.post(`routine/schedule_workout`, scheduleWorkout);
  return result.data;
};

export const deleteScheduledWorkoutByUserIdAndDay = async (userId, day) => {
  const result = await Client.delete(
    `routine/schedule_workout/${userId}/${day}`
  );
  return result.data;
};
