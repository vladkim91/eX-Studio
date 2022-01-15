const { User, Routine } = require('../models');

const createRoutineForUser = async (req, res) => {
  const newRoutine = {
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  const result = await Routine.create(newRoutine);
  res.status(201).send(result);
};

const getRoutineByUser = async (req, res) => {};

const updateRoutineByUser = async (req, res) => {};

const deleteRoutineByUser = async (req, res) => {};

module.exports = {
  createRoutineForUser,
  getRoutineByUser,
  updateRoutineByUser,
  deleteRoutineByUser
};
