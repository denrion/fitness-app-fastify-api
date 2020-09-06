// ******************* DOCUMENT MIDDLEWARE ****************** /
function populateDataOnFind(next) {
  this.populate({
    path: 'user exercises mealPlan intensity',
  });
  next();
}

// ******************** QUERY MIDDLEWARE ******************* //

// **************** AGGREGATION MIDDLEWARE **************** //

module.exports = {
  populateDataOnFind,
};
