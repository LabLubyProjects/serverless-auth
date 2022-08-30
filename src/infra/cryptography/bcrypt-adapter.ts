import { HashComparer } from "src/usecases/protocols";
import { compare } from "bcryptjs"

export class BcryptAdapter implements HashComparer {

  constructor(private readonly salt: number) {}

  async compare(firstValue: string, secondValue: string): Promise<boolean> {
    const isValid = await compare(firstValue, secondValue);
    return isValid;
  }
}