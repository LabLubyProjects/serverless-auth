import { makeCreateUserUseCase } from "../../../infra/factories/usecases/create-user-use-case-factory";
import { makeDeleteUserUseCase } from "../../../infra/factories/usecases/delete-user-use-case-factory";
import { makeUpdateUserUseCase } from "../../../infra/factories/usecases/update-user-use-case-factory";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { createUserValidations, updateUserValidations } from "./user-controller-validations";

export class UserController {
  static async createUser(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;
    const error = createUserValidations().validate(body);

    if(error) throw error;

    const createUserUseCase = makeCreateUserUseCase();
    const createUserUseCaseResponse = await createUserUseCase.handle(body);

    return {
      statusCode: 201,
      body: createUserUseCaseResponse
    }
  }

  static async updateUser(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { params, body } = httpRequest;
    const error = updateUserValidations(Object.keys(body)).validate(body);
    if(error) throw error;

    const updateUserUseCase = makeUpdateUserUseCase();
    const updateUserUseCaseResponse = await updateUserUseCase.handle({ id: params.id, ...body });

    if(!updateUserUseCaseResponse) return {
      statusCode: 404,
      body: {
        message: 'Usuário não encontrado'
      }
    }

    return {
      statusCode: 200,
      body: updateUserUseCaseResponse
    }
  }

  static async deleteUser(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;
    
    if(!id) return {
      statusCode: 400,
      body: {
        message: 'ID não foi fornecido'
      }
    }

    const deleteUserUseCase = makeDeleteUserUseCase();
    const deleteUserUseCaseResult = await deleteUserUseCase.handle(id);
 
    if(deleteUserUseCaseResult === null) return {
      statusCode: 404,
      body: {
        message: 'Usuário não encontrado'
      }
    }

    return {
      statusCode: 204
    }
  }
}