import { DecodedWithID, TokenDecoder, TokenVerifier } from "../protocols";
import { VerifyTokenOutput } from "./verify-token-io";

export class VerifyTokenUseCase {
  constructor(private readonly tokenVerifier: TokenVerifier, private readonly tokenDecoder: TokenDecoder) {}

  handle(token: string): VerifyTokenOutput {
    const verify = this.tokenVerifier.verify(token);

    if(verify) {
      const decodedToken: DecodedWithID = this.tokenDecoder.decode(token);
      return {
        isValid: verify,
        id: decodedToken.id
      }
    }
    return {
      isValid: false
    } 
  }
}