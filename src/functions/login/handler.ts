import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import schema from "./schema";

const login: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { email, password } = event.body;

  

  return formatJSONResponse({
    email, password
  });
}

export const main = middyfy(login);