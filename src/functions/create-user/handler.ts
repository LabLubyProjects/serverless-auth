import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { makeCreateUserUseCase } from "src/infra/factories/usecases/create-user-use-case-factory";
import schema from "./schema";
import validator from "validator";

const createUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { id, email, password } = event.body;

  if(!validator.isEmail(email)) return formatJSONResponse({
    message: "Invalid email"
  }, 400);

  try {
    const createUserUseCase = makeCreateUserUseCase();
    const createUserUseCaseResult = await createUserUseCase.handle({ id, email, password });
    return formatJSONResponse({
      createUserUseCaseResult
    }, 201)
  } catch (error: any) {
    return formatJSONResponse({
      message: error.message
    }, 400);
  }
}

export const main = middyfy(createUser);