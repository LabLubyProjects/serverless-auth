import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import schema from "./schema";

const verifyToken: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { token } = event.body;

  return formatJSONResponse({
    token
  }, 200);
}

export const main = middyfy(verifyToken);