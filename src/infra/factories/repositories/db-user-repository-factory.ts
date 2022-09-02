import { DbUserRepository } from "../../db-repositories/db-user-repository";

export const makeDbUserRepository = (): DbUserRepository => {
  const dbUserRepository: DbUserRepository = new DbUserRepository()
  return dbUserRepository;
}