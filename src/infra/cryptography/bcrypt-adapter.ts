import bcryptjs from "bcryptjs"
import { HashComparer } from "../../usecases/protocols";

export class BcryptAdapter implements HashComparer {

  constructor() {}

  async compare(firstValue: string, secondValue: string): Promise<boolean> {
    const isValid = await bcryptjs.compare(firstValue, secondValue);
    return isValid;
  }
}