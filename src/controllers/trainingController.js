/* eslint-disable no-unused-vars */
const { getAll, getOne, createOne, updateOne, deleteOne } = require('./handlerFactory');
const Training = require('../models/Training/training.model');

/**
 * @desc      Get All Trainings
 * @route     GET /api/v1/trainings
 * @access    Private
 */
const getAllTrainings = getAll(Training);

/**
 * @desc      Get Training By Id
 * @route     GET /api/v1/trainings/:trainingId
 * @access    Private
 */
const getTrainingById = getOne(Training, 'user mealPlan exercises intensity');

/**
 * @desc      Create New Training
 * @route     POST /api/v1/trainings
 * @access    Private
 */

const createTraining = createOne(Training);

/**
 * @desc      Update Training
 * @route     PATHS /api/v1/trainings/:trainingId
 * @access    Private
 */
const updateTraining = updateOne(Training);

/**
 * @desc      Delete Training
 * @route     DELETE /api/v1/trainings/:trainingId
 * @access    Private
 */
const deleteTraining = deleteOne(Training);

module.exports = {
  getAllTrainings,
  getTrainingById,
  createTraining,
  updateTraining,
  deleteTraining,
};
