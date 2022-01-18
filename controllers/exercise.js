const { Exercise, Workout } = require('../models');

const getAllExercises = async (req, res) => {
  const result = await Exercise.findAll({});
  res.status(200).send(result);
};

const getExerciseById = async (req, res) => {
  const exerciseId = req.params.exercise_id;
  const result = await Exercise.findByPk(exerciseId);
  res.status(200).send(result);
};

const getExerciseByMuscleGroup = async (req, res) => {
  const searchQuery = req.query.name;
  const muscleGroup = req.query.muscle_group;

  const type = req.query.type;
  // if muscleGroup
  if (type === 'exercises') {
    const result = await Exercise.findAll({
      where: {
        muscle_group: muscleGroup
      }
    });
    res.status(200).send(result);
  } else if (type === 'workouts') {
    let muscleGroups = muscleGroup.split(' ');
    const workouts = await Workout.findAll({
      raw: true
    });
    const arraysOfMuscleGroups = workouts.map((workout, i) => {
      return { muscleGroups: workout.muscle_groups.split(' '), workout };
    });
    console.log(muscleGroups);
    // console.log(arraysOfMuscleGroups);

    const filteredArray = arraysOfMuscleGroups.filter((workout, i) => {
      return workout.muscleGroups.some((muscle_group, ind) => {
        return muscleGroups.some((muscleGroup, index) => {
          return muscle_group === muscleGroup;
        });
      });
    });
    console.log(filteredArray);
    // const idsArray = filteredArray.workout.map((id, i) => id.id);
    // console.log(idsArray);

    const filteredWorkouts = await Workout.findAll({
      where: {}
    });
    res.status(200).send(filteredArray.map((e) => e.workout));
  }
};
module.exports = {
  getAllExercises,
  getExerciseById,
  getExerciseByMuscleGroup
};
