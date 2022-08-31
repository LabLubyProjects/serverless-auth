import { CreateUserUseCase } from "src/usecases/create-user/create-user-use-case";
import { makeDbUserRepository } from "../repositories/db-user-repository-factory";

export const makeCreateUserUseCase = (): CreateUserUseCase => {
  const createUserUseCase: CreateUserUseCase = new CreateUserUseCase(makeDbUserRepository());
  return createUserUseCase;
}