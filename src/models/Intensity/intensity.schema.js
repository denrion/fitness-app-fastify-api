const mongoose = require('mongoose');

const sanitizeMongooseFields = require('../../utils/mongoose/sanitizeMongooseFields');

const IntensitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, '{PATH} field is required'],
    },
    color: {
      type: String,
      trim: true,
      required: [true, '{PATH} field is required'],
    },
    repetitions: {
      type: Number,
      required: [true, '{PATH} field is required'],
    },
    sets: {
      type: Number,
      required: [true, '{PATH} field is required'],
    },
    break: {
      type: Number,
      required: [true, '{PATH} field is required'],
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
  }
);

// ************************ VIRTUALS ************************ //

// ******************* DOCUMENT MIDDLEWARE ****************** //

// ******************** QUERY MIDDLEWARE ******************* //

// **************** AGGREGATION MIDDLEWARE **************** //

// ******************* INSTANCE METHONDS ******************* //

// ******************** STATIC METHODS ******************** //

// ************************ PLUGINS *********************** //

IntensitySchema.plugin(sanitizeMongooseFields);

module.exports = IntensitySchema;
