const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator');

const Role = require('../../constants/Role');
const Gender = require('../../constants/Gender');
const userMiddleware = require('./user.middleware');
const userInstanceMethods = require('./user.methods');
const userStaticMethods = require('./user.statics');
const userValidators = require('./user.validators');
const sanitizeMongooseFields = require('../../utils/mongoose/sanitizeMongooseFields');
const sanitizeSpecifiedFields = require('../../utils/mongoose/sanitizeSpecifiedFields');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, '{PATH} field is required'],
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
      required: [true, '{PATH} field is required'],
      enum: {
        values: Object.values(Gender),
        message: 'Must be one of the following values: [`Male`, `Female`]',
      },
      default: Gender.FEMALE,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      uniqueCaseInsensitive: true,
      required: [true, '{PATH} field is required'],
      validate: [isEmail, 'Please provide a valid email'],
    },
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.USER,
      required: [true, '{PATH} field is required'],
    },
    password: {
      type: String,
      trim: true,
      select: false,
      required: [true, '{PATH} field is required'],
      minlength: [8, '{PATH} must contain at least 8 characters'],
      maxlength: [50, '{PATH} must not contain more than 50 characters'],
      validate: userValidators.isValidPassword,
    },
    passwordConfirm: {
      type: String,
      trim: true,
      select: false,
      required: [true, 'Please provide a password confirmation'],
      minlength: [8, 'Password must contain at least 8 characters'],
      maxlength: [50, 'Password must not contain more than 50 characters'],
      validate: [userValidators.isValidPassword, userValidators.isPasswordMatch],
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
  }
);

// ************************ VIRTUALS ************************ //
UserSchema.virtual('trainings', {
  ref: 'Training',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});

// ******************* DOCUMENT MIDDLEWARE ****************** //
UserSchema.pre('save', userMiddleware.hashPassword);
UserSchema.pre('save', userMiddleware.updatePasswordChangedAt);

// ******************** QUERY MIDDLEWARE ******************* //
UserSchema.pre('findOne', userMiddleware.getOnlyActiveUsers);

// **************** AGGREGATION MIDDLEWARE **************** //

// ******************* INSTANCE METHONDS ******************* //
UserSchema.methods.isCorrectPassword = userInstanceMethods.isCorrectPassword;
UserSchema.methods.isPasswordChangedAfter = userInstanceMethods.isPasswordChangedAfter;
UserSchema.methods.createPasswordResetToken =
  userInstanceMethods.createPasswordResetToken;

// ******************** STATIC METHODS ******************** //
UserSchema.statics.findByEmail = userStaticMethods.findByEmail;

// ************************ PLUGINS *********************** //

UserSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });
UserSchema.plugin(sanitizeMongooseFields);
UserSchema.plugin(sanitizeSpecifiedFields, [
  'password',
  'passwordConfirm',
  'passwordChangedAt',
  'passwordResetToken',
  'passwordResetExpires',
  'isActive',
]);

module.exports = UserSchema;
