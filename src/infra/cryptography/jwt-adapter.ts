import jwt from 'jsonwebtoken'
import { Encrypter, TokenDecoder, TokenVerifier } from '../../usecases/protocols';

export class JwtAdapter implements Encrypter, TokenVerifier, TokenDecoder {
  constructor(private readonly secret: string) {}

  encrypt(value: any): string {
    const token = jwt.sign(value, this.secret, {
      expiresIn: '30m'
    });
    return token;
  }

  verify(token: string): boolean {
    try {
      jwt.verify(token, this.secret);
      return true;
    } catch (error) {
      return false;
    }
  }

  decode(token: string): any {
    const decoded = jwt.decode(token);
    return decoded;
  }
}