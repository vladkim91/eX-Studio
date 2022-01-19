import Client from '.';

export const getWorkoutsAndExercises = async (type, name, muscleGroup) => {
  const result = await Client.get(
    `exercise/filter?type=${type}&muscle_group=${muscleGroup}&name=${name}`
  );
  return result.data;
};

export const editFilterParams = async (filter, value) => {
  const result = await Client.put(`/`, filter, value);
  return result.data;
};
