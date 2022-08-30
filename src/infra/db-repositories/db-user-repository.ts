import { UserModel } from "src/domain/users/user-model";
import { UserRepository } from "src/domain/users/user-repository";
import { mapPrismaUserToDomainUserModel } from "./helpers";
import { prismaClient } from "./prisma";

export class DbUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<UserModel | null> {
    const user = await prismaClient.user.findUnique({
      where: { email: email }
    })

    if(!user) return null

    return mapPrismaUserToDomainUserModel(user)
  }
}