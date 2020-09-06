const mongoose = require('mongoose');
const sanitizeMongooseFields = require('../../utils/mongoose/sanitizeMongooseFields');
const MealSchema = require('./meal.schema');

const MealPlanSchema = new mongoose.Schema(
  {
    calories: {
      type: Number,
      required: [true, '{PATH} field is required'],
    },
    carbohydrates: {
      type: Number,
      required: [true, '{PATH} field is required'],
    },
    fat: {
      type: Number,
      required: [true, '{PATH} field is required'],
    },
    protein: {
      type: Number,
      required: [true, '{PATH} field is required'],
    },
    title: {
      type: String,
      trim: true,
      required: [true, '{PATH} field is required'],
    },
    meals: [
      {
        type: MealSchema,
        required: [true, '{PATH} field is required'],
      },
    ],
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

MealPlanSchema.plugin(sanitizeMongooseFields);

module.exports = MealPlanSchema;
