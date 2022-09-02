import { User } from "@prisma/client";
import { UserModel } from "../../domain/users/user-model";

export const mapPrismaUserToDomainUserModel = (prismaUser: User): UserModel => {
  const userModel: UserModel = {
    id: prismaUser.id,
    email: prismaUser.email,
    password: prismaUser.password
  }
  return userModel;
}