import { UserModel } from "src/domain/users/user-model";
import { UserRepository } from "src/domain/users/user-repository";
import { DuplicatedEmailError } from "../errors/DuplicatedEmailError";
import { CreateUserInput, CreateUserOutput } from "./create-user-io";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(input: CreateUserInput): Promise<CreateUserOutput> {
    const existsByEmail = await this.userRepository.findByEmail(input.email);

    if(existsByEmail) throw new DuplicatedEmailError();

    const user: UserModel = {
      id: input.id,
      email: input.email,
      password: input.password
    };

    const { password, ...outputUser } = await this.userRepository.create(user);
    return outputUser;
  }
}