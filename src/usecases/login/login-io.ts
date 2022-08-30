import { UserModel } from "src/domain/users/user-model";

export type LoginOutput = Partial<UserModel & {token: string} | null>