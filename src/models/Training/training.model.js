const { model } = require('mongoose');
const TrainingSchema = require('./training.schema');

const Training = model('Training', TrainingSchema);

module.exports = Training;
