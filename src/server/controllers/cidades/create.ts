import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface ICidade {
  name: string;
  estado: string;
}

interface IFilter {
  filter?: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  name: yup.string().required().min(3),
  estado: yup.string().required().min(3),
});

const queryValidation: yup.Schema<IFilter> = yup.object().shape({
  filter: yup.string().min(3).required(),
});

export const createValidation = validation({
  body: bodyValidation,
  query: queryValidation,
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  res.status(StatusCodes.CREATED).json(req.body);
  return;
};
