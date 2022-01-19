import Client from '.';

export const getWorkoutsAndExercises = async (type, name, muscleGroup) => {
  const result = await Client.get(
    `exercise/filter?type=${type}&muscle_group=${muscleGroup}&name=${name}`
  );
  return result.data;
};

export const setFilterParams = async (filter) => {
  const result = await Client.put(`filter/`, filter);
  return result.data;
};
