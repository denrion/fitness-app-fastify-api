const { model } = require('mongoose');
const IntensitySchema = require('./intensity.schema');

const Intensity = model('Intensity', IntensitySchema);

module.exports = Intensity;
