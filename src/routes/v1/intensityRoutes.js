const intensityController = require('../../controllers/intensityController');
const Role = require('../../constants/Role');

const intensityRouter = (fastify, opts, done) => {
  // Create new scope for routes that need to go through isAuth & restrictTo check
  fastify.addHook('onRequest', async (request, reply) => {
    await fastify.isAuth(request, reply);
    await fastify.restrictTo(request, reply, Role.ADMIN);
  });

  fastify.get('/', intensityController.getAllIntensities);
  fastify.post('/', intensityController.createIntensity);
  fastify.get('/:id', intensityController.getIntensityById);
  fastify.put('/:id', intensityController.updateIntensity);
  fastify.delete('/:id', intensityController.deleteIntensity);

  done();
};

module.exports = intensityRouter;
