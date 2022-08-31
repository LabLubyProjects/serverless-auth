import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { makeVerifyTokenUseCase } from "src/infra/factories/usecases/verify-token-usecase-factory";
import schema from "./schema";

const verifyToken: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { token } = event.body;

  const verifyTokenUseCase = makeVerifyTokenUseCase();
  const verifyTokenUseCaseResult = verifyTokenUseCase.handle(token);

  return formatJSONResponse({
    verified: verifyTokenUseCaseResult
  }, 200);
}

export const main = middyfy(verifyToken);