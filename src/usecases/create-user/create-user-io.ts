import { UserModel } from '../../domain/users/user-model'

export type CreateUserInput = {
  id: string;
  email: string;
  password: string;
}

export type CreateUserOutput = Omit<UserModel, 'password'>