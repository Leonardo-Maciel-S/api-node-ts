import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

import * as yup from "yup";

interface ICidade {
  name: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  name: yup.string().required().min(3),
  estado: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validateData: ICidade | undefined = undefined;

  try {
    validateData = await bodyValidation.validate(req.body, {
      abortEarly: false,
    });
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (!error.path) return;

      errors[error.path] = error.message;
    });

    // res.status(StatusCodes.BAD_REQUEST).json({ errors: yupError.errors });
    res.status(StatusCodes.BAD_REQUEST).json({ errors });
    return;
  }

  res.status(StatusCodes.CREATED).json(validateData);
  return;
};
