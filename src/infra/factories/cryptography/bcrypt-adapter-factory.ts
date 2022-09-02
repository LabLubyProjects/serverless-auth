import { BcryptAdapter } from "../../cryptography/bcrypt-adapter";

export const makeBcryptAdapter = (): BcryptAdapter => {
  const bcryptAdapter: BcryptAdapter = new BcryptAdapter();
  return bcryptAdapter
}