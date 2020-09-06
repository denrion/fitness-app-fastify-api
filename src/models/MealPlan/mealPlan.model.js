const { model } = require('mongoose');
const MealPlanSchema = require('./mealPlan.schema');

const MealPlan = model('MealPlan', MealPlanSchema);

module.exports = MealPlan;
