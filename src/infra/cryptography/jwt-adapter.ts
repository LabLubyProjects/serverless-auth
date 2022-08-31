import { Encrypter, TokenVerifier } from "src/usecases/protocols";
import { sign, verify } from 'jsonwebtoken'

export class JwtAdapter implements Encrypter, TokenVerifier {
  constructor(private readonly secret: string) {}
  
  encrypt(value: any): string {
    const token = sign(value, this.secret);
    return token;
  }

  verify(token: string): boolean {
    try {
      const isValid = verify(token, this.secret);
      return true;
    } catch (error) {
      return false;
    }
  }
}