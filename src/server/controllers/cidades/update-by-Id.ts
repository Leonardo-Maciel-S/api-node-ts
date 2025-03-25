import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface IParamsProps {
  id?: number;
}

interface IBodyProps {
  name: string;
}

const paramsValidation: yup.Schema<IParamsProps> = yup.object().shape({
  id: yup.number().integer().moreThan(0),
});

const bodyValidation: yup.Schema<IBodyProps> = yup.object().shape({
  name: yup.string().required().min(3),
});

export const updateByIdValidation = validation({
  params: paramsValidation,
  body: bodyValidation,
});

export const updateById = async (req: Request<IParamsProps>, res: Response) => {
  console.log(req.params.id);
  console.log(req.body);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Não implementado! update by id");
  return;
};
