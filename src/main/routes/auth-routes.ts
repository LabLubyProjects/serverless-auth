import { Router } from "express";
import { AuthController } from "../../presentation/controllers/auth/auth-controller";
import { ExpressAdapter } from "../adapters/express-adapter";

export default (router: Router): void => {
  router.post('/login', ExpressAdapter.adapt(AuthController.login));
  router.post('/verify-token', ExpressAdapter.adapt(AuthController.verifyToken));
}