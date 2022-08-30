import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { makeLoginUseCase } from "src/infra/factories/usecases/login-usecase-factory";
import schema from "./schema";

const login: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { email, password } = event.body;

  const loginUseCase = makeLoginUseCase()
  const loginResult = await loginUseCase.handle(email, password)

  return formatJSONResponse({
    email, password
  });
}

export const main = middyfy(login);