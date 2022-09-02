
import { UserModel } from "../../domain/users/user-model";
import { UserRepository } from "../../domain/users/user-repository";
import { DuplicatedEmailError } from "../errors/DuplicatedEmailError";
import { mergeObjectsUsingTruthyValues } from "../utils";
import { UpdateUserInput, UpdateUserOutput } from "./update-user-use-case-io";

export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(input: UpdateUserInput): Promise<UpdateUserOutput> {
    const user = await this.userRepository.findByID(input.id);
    if(!user) return null;

   if(input.email) {
    const existsByEmail = await this.userRepository.findByEmail(input.email);
    if(existsByEmail) throw new DuplicatedEmailError();
   }

    const updatedUserData: UserModel = mergeObjectsUsingTruthyValues(user, input);

    const { password, ...outputUser } = await this.userRepository.update(updatedUserData);
    return outputUser;
  }
}