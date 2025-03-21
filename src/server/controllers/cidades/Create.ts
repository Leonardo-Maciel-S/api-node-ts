import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

import * as yup from "yup";

interface ICidade {
  name: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  name: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validateData: ICidade | undefined = undefined;

  try {
    validateData = await bodyValidation.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;
    res.status(StatusCodes.BAD_REQUEST).json({ errors: yupError.errors });
    return;
  }

  res.status(StatusCodes.CREATED).json(validateData);
  return;
};
