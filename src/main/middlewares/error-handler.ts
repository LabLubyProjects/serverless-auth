import { NextFunction, Request, Response } from "express";
import { InvalidParamError } from "../../presentation/errors/invalid-param";
import { MissingParamError } from "../../presentation/errors/missing-param";
import { DuplicatedEmailError } from "../../usecases/errors/DuplicatedEmailError";

export const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  const errorBody = { error: error.message };
  if(error instanceof InvalidParamError || error instanceof MissingParamError) return res.status(400).json(errorBody);
  if(error instanceof DuplicatedEmailError) return res.status(409).json(errorBody);
  return res.status(500).json({ error: 'Internal Server Error'});
}