const mongoose = require('mongoose');

const sanitizeMongooseFields = require('../../utils/mongoose/sanitizeMongooseFields');
const { populateDataOnFind } = require('./training.middleware');

const TrainingSchema = new mongoose.Schema(
  {
    color: { type: String, trim: true, required: [true, '{PATH} is required '] },
    date: {
      type: Date,
      required: [true, '{PATH} is required'],
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, '{PATH} is required'],
      validate: {
        validator: async (userId) => await mongoose.model('User').exists(userId),
        message: 'Must be a user id. {VALUE} does not belong to a user',
      },
    },
    mealPlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MealPlan',
      required: [true, '{PATH} is required'],
      validate: {
        validator: async (mealPlanId) =>
          await mongoose.model('MealPlan').exists(mealPlanId),
        message: 'Must be a mealPlan id. {VALUE} does not belong to a mealPlan',
      },
    },
    intensity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Intensity',
      required: [true, '{PATH} is required'],
      validate: {
        validator: async (intensityId) =>
          await mongoose.model('Intensity').exists(intensityId),
        message: 'Must be a intensity id. {VALUE} does not belong to a intensity',
      },
    },
    exercises: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
        required: [true, '{PATH} is required'],
        validate: {
          validator: async (exerciseId) =>
            await mongoose.model('Exercise').exists(exerciseId),
          message: 'Must be a exercise id. {VALUE} does not belong to a exercise',
        },
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
TrainingSchema.pre(/find/, populateDataOnFind);

// **************** AGGREGATION MIDDLEWARE **************** //

// ******************* INSTANCE METHONDS ******************* //

// ******************** STATIC METHODS ******************** //

// ************************ PLUGINS *********************** //

TrainingSchema.plugin(sanitizeMongooseFields);

module.exports = TrainingSchema;
