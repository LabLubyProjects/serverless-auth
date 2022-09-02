import LoginUseCase from "../../../usecases/login/login-use-case";
import { makeBcryptAdapter } from "../cryptography/bcrypt-adapter-factory";
import { makeJwtAdapter } from "../cryptography/jwt-adapter-factory";
import { makeDbUserRepository } from "../repositories/db-user-repository-factory";

export const makeLoginUseCase = (): LoginUseCase => {
  const loginUseCase: LoginUseCase = new LoginUseCase(makeDbUserRepository(), makeBcryptAdapter(), makeJwtAdapter());
  return loginUseCase;
}