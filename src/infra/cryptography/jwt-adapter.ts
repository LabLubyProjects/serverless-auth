import * as jwt from 'jsonwebtoken'
import { Encrypter, TokenVerifier } from '../../usecases/protocols';

export class JwtAdapter implements Encrypter, TokenVerifier {
  constructor(private readonly secret: string) {}
  
  encrypt(value: any): string {
    const token = jwt.sign(value, this.secret);
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
}