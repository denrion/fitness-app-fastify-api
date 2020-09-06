const mongoose = require('mongoose');

const sanitizeMongooseFields = require('../../utils/mongoose/sanitizeMongooseFields');

const MealSchema = new mongoose.Schema(
  {
    imageURL: {
      type: String,
      trim: true,
      required: [true, '{PATH} is required'],
    },
    readyInMinutes: {
      type: Number,
      required: [true, '{PATH} is required'],
    },
    servings: {
      type: Number,
      required: [true, '{PATH} is required'],
    },
    sourceURL: {
      type: String,
      trim: true,
      required: [true, '{PATH} is required'],
    },
    title: {
      type: String,
      trim: true,
      required: [[true, '{PATH} is required']],
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

MealSchema.plugin(sanitizeMongooseFields);

module.exports = MealSchema;
