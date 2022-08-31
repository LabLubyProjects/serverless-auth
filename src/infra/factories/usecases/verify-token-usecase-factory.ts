import { VerifyTokenUseCase } from "src/usecases/verify-token/verify-token-use-case";
import { makeJwtAdapter } from "../cryptography/jwt-adapter-factory";

export const makeVerifyTokenUseCase = (): VerifyTokenUseCase => {
  const verifyTokenUseCase: VerifyTokenUseCase = new VerifyTokenUseCase(makeJwtAdapter());
  return verifyTokenUseCase;
}