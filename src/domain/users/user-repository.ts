import { UserModel } from "./user-model";

export interface UserRepository {
  findByEmail(email: string): Promise<UserModel | null>;
  create(user: UserModel): Promise<UserModel>;
}