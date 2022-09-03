import { Express, Router } from 'express';
import { AuthController } from '../../presentation/controllers/auth/auth-controller';
import { UserController } from '../../presentation/controllers/user/user-controller';
import { ExpressAdapter } from '../adapters/express-adapter';

export default (app: Express): void => {
  const router = Router();
  router.post('/login', ExpressAdapter.adapt(AuthController.login));
  router.post('/verify-token', ExpressAdapter.adapt(AuthController.verifyToken));
  router.post('/users', ExpressAdapter.adapt(UserController.createUser));
  router.put('/users/:id', ExpressAdapter.adapt(UserController.updateUser));
  router.delete('/users/:id', ExpressAdapter.adapt(UserController.deleteUser));
  app.use(router);
}