import { UserModel } from "../../domain/users/user-model";
import { UserRepository } from "../../domain/users/user-repository";
import { mapPrismaUserToDomainUserModel } from "./helpers";
import { prismaClient } from "./prisma";

export class DbUserRepository implements UserRepository {
  
  async findByID(id: string): Promise<UserModel | null> {
    const prismaUser = await prismaClient.user.findUnique({
      where: {
        id
      }
    });

    if(!prismaUser) return null;

    return mapPrismaUserToDomainUserModel(prismaUser);
  }

  async update(user: Partial<UserModel>): Promise<UserModel> {
    const updatedPrismaUser = await prismaClient.user.update({
      where: {
        id: user.id
      }, data: user
    });

    return mapPrismaUserToDomainUserModel(updatedPrismaUser);
  }
  
  async delete(id: string): Promise<void> {
    await prismaClient.user.delete({
      where: {
        id
      }
    });
  }

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