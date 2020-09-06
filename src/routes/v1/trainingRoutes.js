const trainingController = require('../../controllers/trainingController');
const Role = require('../../constants/Role');

const trainingRouter = (fastify, opts, done) => {
  // Create new scope for routes that need to go through isAuth & restrictTo check
  fastify.addHook('onRequest', async (request, reply) => {
    await fastify.isAuth(request, reply);
    await fastify.restrictTo(request, reply, Role.ADMIN);
  });

  fastify.get('/', trainingController.getAllTrainings);
  fastify.post('/', trainingController.createTraining);
  fastify.get('/:id', trainingController.getTrainingById);
  fastify.put('/:id', trainingController.updateTraining);
  fastify.delete('/:id', trainingController.deleteTraining);

  done();
};

module.exports = trainingRouter;
