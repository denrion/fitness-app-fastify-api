const authController = require('../../controllers/authController');

const authRouter = (fastify, opts, done) => {
  fastify.post('/signup', authController.signup);
  fastify.post('/login', authController.login);

  // Create new scope for routes that need to go through isAuth check
  fastify.register((fastify, opts, done) => {
    fastify.addHook('onRequest', fastify.isAuth);

    fastify.post('/logout', authController.logout);
    fastify.get('/me', authController.getMe);
    fastify.patch('/updateMe', authController.updateMe);
    fastify.patch('/updateMyPassword', authController.updateMyPassword);
    fastify.delete('/deleteMe', authController.deleteMe);

    done();
  });

  done();
};

module.exports = authRouter;
