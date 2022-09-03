
import { UserRepository } from "../../domain/users/user-repository";
import { DuplicatedEmailError } from "../errors/DuplicatedEmailError";
import { UpdateUserInput, UpdateUserOutput } from "./update-user-use-case-io";

export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(input: UpdateUserInput): Promise<UpdateUserOutput> {
    const user = await this.userRepository.findByID(input.id);
    if(!user) return null;

    if(input.email) {
      const existsByEmail = await this.userRepository.findByEmail(input.email);
      if(existsByEmail && user.id !== existsByEmail.id) throw new DuplicatedEmailError();
     }

    const { password, ...outputUser } = await this.userRepository.update(input);
    return outputUser;
  }
}