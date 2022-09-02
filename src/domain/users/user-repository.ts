import { UserModel } from "./user-model";

export interface UserRepository {
  findByEmail(email: string): Promise<UserModel | null>;
  findByID(id: string): Promise<UserModel | null>;
  update(user: UserModel): Promise<UserModel>;
  delete(id: string): Promise<void>;
  create(user: UserModel): Promise<UserModel>;
}