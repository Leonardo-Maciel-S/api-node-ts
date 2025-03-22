import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface ICidade {
  name: string;
  estado: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  name: yup.string().required().min(3),
  estado: yup.string().required().min(3),
});

export const createValidation = validation({
  body: bodyValidation,
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado!");
  return;
};
