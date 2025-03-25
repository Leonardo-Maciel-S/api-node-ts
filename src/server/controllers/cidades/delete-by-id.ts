import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface IParamsProps {
  id?: number;
}

const paramsValidation: yup.Schema<IParamsProps> = yup.object().shape({
  id: yup.number().required(),
});

export const deleteByIdValidation = validation({
  params: paramsValidation,
});

export const deleteById = async (req: Request<IParamsProps>, res: Response) => {
  console.log(req.params.id);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("DeleteById não implementado!");
};
