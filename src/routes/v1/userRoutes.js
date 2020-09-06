const userController = require('../../controllers/userController');
const Role = require('../../constants/Role');

const userRouter = (fastify, opts, done) => {
  fastify.addHook('onRequest', async (request, reply) => {
    await fastify.isAuth(request, reply);
    await fastify.restrictTo(request, reply, Role.ADMIN);
  });

  fastify.get('/', userController.getAllUsers);
  fastify.post('/', userController.createUser);
  fastify.get('/:id', userController.getUserById);
  fastify.put('/:id', userController.updateUser);
  fastify.delete('/:id', userController.deleteUser);

  done();
};

module.exports = userRouter;
