import { UserModel } from "src/domain/users/user-model";
import { UserRepository } from "src/domain/users/user-repository";
import { mapPrismaUserToDomainUserModel } from "./helpers";
import { prismaClient } from "./prisma";

export class DbUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<UserModel | null> {
    const prismaUser = await prismaClient.user.findUnique({
      where: { email: email }
    })
    
    if(!prismaUser) return null
    
    return mapPrismaUserToDomainUserModel(prismaUser)
  }

  async create(user: UserModel): Promise<UserModel> {
    const prismaUser = await prismaClient.user.create({
      data: user
    });

    return mapPrismaUserToDomainUserModel(prismaUser);
  }
}