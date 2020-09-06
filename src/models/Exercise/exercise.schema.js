const mongoose = require('mongoose');

const ExerciseGroup = require('../../constants/ExerciseGroups');
const sanitizeMongooseFields = require('../../utils/mongoose/sanitizeMongooseFields');

const ExerciseSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
      required: [true, '{PATH} field is required'],
    },
    group: {
      type: String,
      trim: true,
      enum: Object.values(ExerciseGroup),
      required: [true, '{PATH} field is required'],
      default: ExerciseGroup.ABS,
    },
    title: {
      type: String,
      trim: true,
      required: [true, '{PATH} field is required'],
    },
    videoURL: {
      type: String,
      trim: true,
      required: [true, '{PATH} is required'],
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

ExerciseSchema.plugin(sanitizeMongooseFields);

module.exports = ExerciseSchema;
