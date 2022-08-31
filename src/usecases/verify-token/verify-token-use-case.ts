import { TokenVerifier } from "../protocols";

export class VerifyTokenUseCase {
  constructor(private readonly tokenVerifier: TokenVerifier) {}

  handle(token: string): boolean {
    return this.tokenVerifier.verify(token)
  }
}