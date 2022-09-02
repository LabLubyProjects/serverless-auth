import { Router } from "express";
import { UserController } from "../../presentation/controllers/user/user-controller";
import { ExpressAdapter } from "../adapters/express-adapter";

export default (router: Router): void => {
  router.post('/users', ExpressAdapter.adapt(UserController.createUser));
  router.put('/users/:id', ExpressAdapter.adapt(UserController.updateUser));
  router.delete('/users/:id', ExpressAdapter.adapt(UserController.deleteUser));
}