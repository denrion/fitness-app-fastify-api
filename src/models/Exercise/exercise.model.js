const { model } = require('mongoose');
const ExerciseSchema = require('./exercise.schema');

const Exercise = model('Exercise', ExerciseSchema);

module.exports = Exercise;
