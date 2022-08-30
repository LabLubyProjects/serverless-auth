import { Encrypter } from "src/usecases/protocols";
import { sign } from 'jsonwebtoken'

export class JwtAdapter implements Encrypter {
  constructor(private readonly secret: string) {}
  
  encrypt(value: any): string {
    const token = sign(value, this.secret);
    return token;
  }
}