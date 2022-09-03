import { VerifyTokenUseCase } from "../../../usecases/verify-token/verify-token-use-case";
import { makeJwtAdapter } from "../cryptography/jwt-adapter-factory";

export const makeVerifyTokenUseCase = (): VerifyTokenUseCase => {
  const jwt = makeJwtAdapter();
  const verifyTokenUseCase: VerifyTokenUseCase = new VerifyTokenUseCase(jwt, jwt);
  return verifyTokenUseCase;
}