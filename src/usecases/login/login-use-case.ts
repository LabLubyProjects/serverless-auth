import { UserRepository } from "src/domain/users/user-repository";
import { Encrypter, HashComparer } from "../protocols";
import { LoginOutput } from "./login-io";

export default class LoginUseCase {
  constructor(private readonly userRepository: UserRepository, private readonly hashComparer: HashComparer, private readonly encrypter: Encrypter) {}

  async handle(email: string, password: string): Promise<LoginOutput> {
    const user = await this.userRepository.findByEmail(email);
    
    if(!user) return null;

    const passwordsMatch = await this.hashComparer.compare(password, user.password)

    if(!passwordsMatch) return null;

    const token = this.encrypter.encrypt({ id: user.id })

    const loginOutput: LoginOutput = {
      id: user.id,
      email: user.email,
      token
    }

    return loginOutput;
  }
}