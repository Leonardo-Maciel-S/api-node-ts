import { StatusCodes } from "http-status-codes";
import { Request, RequestHandler, Response } from "express";

import * as yup from "yup";

interface ICidade {
  name: string;
  estado: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  name: yup.string().required().min(3),
  estado: yup.string().required().min(3),
});

export const createBodyValidator: RequestHandler = async (req, res, next) => {
  try {
    await bodyValidation.validate(req.body, {
      abortEarly: false,
    });

    return next();
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (!error.path) return;

      errors[error.path] = error.message;
    });

    // res.status(StatusCodes.BAD_REQUEST).json({ errors: yupError.errors });
    res.status(StatusCodes.BAD_REQUEST).json({ errors });
    return;
  }
};

interface IFilter {
  filter?: string;
}

const queryValidation: yup.Schema<IFilter> = yup.object().shape({
  filter: yup.string(),
});

export const createQueryValidator: RequestHandler = async (req, res, next) => {
  try {
    await queryValidation.validate(req.query, {
      abortEarly: false,
    });

    return next();
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (!error.path) return;

      errors[error.path] = error.message;
    });

    // res.status(StatusCodes.BAD_REQUEST).json({ errors: yupError.errors });
    res.status(StatusCodes.BAD_REQUEST).json({ errors });
    return;
  }
};

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  res.status(StatusCodes.CREATED).json(req.body);
  return;
};
