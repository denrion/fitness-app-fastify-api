const authRouter = require('../routes/v1/authRoutes');
const userRouter = require('../routes/v1/userRoutes');
const exerciseRouter = require('../routes/v1/exerciseRoutes');
const intensityRouter = require('../routes/v1/intensityRoutes');
const mealPlanRouter = require('../routes/v1/mealPlanRoutes');
const trainingRouter = require('../routes/v1/trainingRoutes');

const registerV1Routes = (fastify, opts, done) => {
  fastify.register(authRouter, { prefix: '/auth' });
  fastify.register(userRouter, { prefix: '/users' });
  fastify.register(exerciseRouter, { prefix: '/exercises' });
  fastify.register(intensityRouter, { prefix: '/intensities' });
  fastify.register(mealPlanRouter, { prefix: '/mealPlans' });
  fastify.register(trainingRouter, { prefix: '/trainings' });

  done();
};

const registerAPIRoutes = (fastify) => {
  fastify.register(registerV1Routes, { prefix: '/api/v1' });
};

module.exports = registerAPIRoutes;
