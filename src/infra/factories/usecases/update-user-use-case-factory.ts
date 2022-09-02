import { UpdateUserUseCase } from "../../../usecases/update-user/update-user-use-case";
import { makeDbUserRepository } from "../repositories/db-user-repository-factory";

export const makeUpdateUserUseCase = (): UpdateUserUseCase => {
  const updateUserUseCase = new UpdateUserUseCase(makeDbUserRepository());
  return updateUserUseCase;
}