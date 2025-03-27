import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface IParamsProps {
  id?: number;
}

const paramsValidation: yup.Schema<IParamsProps> = yup.object().shape({
  id: yup.number().integer().moreThan(0),
});

export const getByIdValidation = validation({
  params: paramsValidation,
});

export const getById = async (req: Request<IParamsProps>, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json({ id: req.params.id, nome: "teste", estado: "goias" });

  return;
};
