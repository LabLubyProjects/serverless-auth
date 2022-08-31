export interface HashComparer {
  compare(firstValue: string, secondValue: string): Promise<boolean>;
}

export interface Encrypter {
  encrypt(value: any): string;
}

export interface TokenVerifier {
  verify(value: string): boolean;
}