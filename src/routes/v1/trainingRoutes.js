const Role = require('../../constants/Role');
const trainingController = require('../../controllers/trainingController');
const restrictRouteTo = require('../../utils/fastify/restrictRouteTo');

const trainingRouter = (fastify, opts, done) => {
  // Create new scope for routes that need to go through isAuth & restrictTo check
  fastify.addHook('onRequest', fastify.isAuth);

  const getAllTrainingsOpts = {
    ...restrictRouteTo(fastify, Role.ADMIN, Role.USER),
    async preValidation(request, reply, done) {
      const { id, role } = request.user;

      if (Role.USER === role) request.query.user = id;
    },
  };

  const getTrainingByIdOpts = {
    ...restrictRouteTo(fastify, Role.ADMIN, Role.USER),
    async preValidation(request, reply, done) {
      const { id, role } = request.user;

      if (Role.USER === role) request.findOneFilter = { user: id };
    },
  };

  fastify.get('/', getAllTrainingsOpts, trainingController.getAllTrainings);
  fastify.post(
    '/',
    restrictRouteTo(fastify, Role.ADMIN),
    trainingController.createTraining
  );

  fastify.get('/:id', getTrainingByIdOpts, trainingController.getTrainingById);
  fastify.put(
    '/:id',
    restrictRouteTo(fastify, Role.ADMIN),
    trainingController.updateTraining
  );
  fastify.delete(
    '/:id',
    restrictRouteTo(fastify, Role.ADMIN),
    trainingController.deleteTraining
  );

  done();
};

module.exports = trainingRouter;
