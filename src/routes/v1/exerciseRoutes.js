const exerciseController = require('../../controllers/exerciseController');
const Role = require('../../constants/Role');

const exerciseRouter = (fastify, opts, done) => {
  // Create new scope for routes that need to go through isAuth & restrictTo check
  fastify.addHook('onRequest', async (request, reply) => {
    await fastify.isAuth(request, reply);
    await fastify.restrictTo(request, reply, Role.ADMIN);
  });

  fastify.get('/', exerciseController.getAllExercises);
  fastify.post('/', exerciseController.createExercise);
  fastify.get('/:id', exerciseController.getExerciseById);
  fastify.put('/:id', exerciseController.updateExercise);
  fastify.delete('/:id', exerciseController.deleteExercise);

  done();
};

module.exports = exerciseRouter;
