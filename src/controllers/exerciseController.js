/* eslint-disable no-unused-vars */
const Exercise = require('../models/Exercise/exercise.model');
const { getAll, getOne, createOne, updateOne, deleteOne } = require('./handlerFactory');

/**
 * @desc      Get All Exercises
 * @route     GET /api/v1/exercises
 * @access    Private
 */
const getAllExercises = getAll(Exercise);

/**
 * @desc      Get Exercise By Id
 * @route     GET /api/v1/exercises/:exerciseId
 * @access    Private
 */
const getExerciseById = getOne(Exercise);

/**
 * @desc      Create New Exercise
 * @route     POST /api/v1/exercises
 * @access    Private
 */
const createExercise = createOne(Exercise);

/**
 * @desc      Update Exercise
 * @route     PUT /api/v1/exercises/:exerciseId
 * @access    Private
 */
const updateExercise = updateOne(Exercise);

/**
 * @desc      Delete Exercise
 * @route     DELETE /api/v1/exercises/:exerciseId
 * @access    Private
 */
const deleteExercise = deleteOne(Exercise);

module.exports = {
  getAllExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  deleteExercise,
};
