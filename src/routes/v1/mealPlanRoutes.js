const mealPlanController = require('../../controllers/mealPlanController');
const Role = require('../../constants/Role');

const mealRouter = (fastify, opts, done) => {
  // Create new scope for routes that need to go through isAuth & restrictTo check
  fastify.addHook('onRequest', async (request, reply) => {
    await fastify.isAuth(request, reply);
    await fastify.restrictTo(request, reply, Role.ADMIN);
  });

  fastify.get('/', mealPlanController.getAllMealPlans);
  fastify.post('/', mealPlanController.createMealPlan);
  fastify.get('/:id', mealPlanController.getMealPlanById);
  fastify.put('/:id', mealPlanController.updateMealPlan);
  fastify.delete('/:id', mealPlanController.deleteMealPlan);

  done();
};

module.exports = mealRouter;
