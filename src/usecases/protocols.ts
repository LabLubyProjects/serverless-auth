export interface HashComparer {
  compare(firstValue: string, secondValue: string): Promise<boolean>;
}

export interface Encrypter {
  encrypt(value: any): string;
}

export interface TokenVerifier {
  verify(token: string): boolean;
}

export interface TokenDecoder {
  decode(token: string): any;
}

export interface DecodedWithID {
  id: string;
}