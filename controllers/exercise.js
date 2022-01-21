const { Exercise, Workout } = require('../models');
const { Op } = require('sequelize');

const getAllExercises = async (req, res) => {
  const result = await Exercise.findAll({});

  res.status(200).send(result);
};

const getExerciseById = async (req, res) => {
  const exerciseId = req.params.exercise_id;
  const result = await Exercise.findByPk(exerciseId);
  res.status(200).send(result);
};

const getExercisesAndWorkoutsByMuscleGroup = async (req, res) => {
  let searchQuery;
  let muscleGroup;
  // if no name is search query
  if (req.query.name) {
    searchQuery = req.query.name;
  } else {
    searchQuery = '';
  }
  if (req.query.muscle_group) {
    muscleGroup = req.query.muscle_group.split(' ');
  } else {
    muscleGroup = '';
  }

  // const muscleGroup = req.query.muscle_group.split(' ');
  const type = req.query.type;

  if (type === 'exercises') {
    const exercises = await Exercise.findAll({
      where: {
        name: {
          [Op.iLike]: `%${searchQuery}%`
        }
      }
    });
    if (req.query.muscle_group) {
      const arraysOfMuscleGroups = exercises.map((exercise, i) => {
        return { muscleGroup: [exercise.muscle_group], exercise };
      });

      const filteredArray = arraysOfMuscleGroups.filter((exercise, i) => {
        return exercise.muscleGroup.some((muscle_group, ind) => {
          return muscleGroup.some((muscleGroup, index) => {
            return muscle_group === muscleGroup;
          });
        });
      });

      console.log(filteredArray.map((e) => e.exercise));
      res.status(200).send(filteredArray.map((e) => e.exercise));
    } else {
      res.status(200).send(exercises);
    }
  } else if (type === 'workouts') {
    const workouts = await Workout.findAll({
      nest: true,
      where: {
        name: {
          [Op.iLike]: `%${searchQuery}%`
        }
      },
      include: {
        model: Exercise,
        through: { attributes: [] },
        as: 'added_exercises'
      }
    });

    if (req.query.muscle_group) {
      const arraysOfMuscleGroups = workouts.map((workout, i) => {
        return { muscleGroups: workout.muscle_groups.split(' '), workout };
      });

      // if the muscleGroup input has the muscle group from the workout, then keep the
      // muscle group
      const filteredArray = arraysOfMuscleGroups.filter((workout, i) => {
        return workout.muscleGroups.some((muscle_group, ind) => {
          return muscleGroup.some((muscleGroup, index) => {
            return muscle_group === muscleGroup;
          });
        });
      });
      res.status(200).send(filteredArray.map((e) => e.workout));
    } else {
      res.status(200).send(workouts);
    }
  }
};
module.exports = {
  getAllExercises,
  getExerciseById,
  getExercisesAndWorkoutsByMuscleGroup
};
