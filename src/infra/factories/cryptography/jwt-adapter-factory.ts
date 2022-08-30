import { JwtAdapter } from "src/infra/cryptography/jwt-adapter";

export const makeJwtAdapter = (): JwtAdapter => {
  const jwtAdapter: JwtAdapter = new JwtAdapter(process.env.JWT_SECRET ?? "secret");
  return jwtAdapter;
}