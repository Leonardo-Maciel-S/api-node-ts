import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

const queryValidation: yup.Schema<IQueryProps> = yup.object().shape({
  page: yup.number().optional().moreThan(0),
  limit: yup.number().optional().moreThan(0),
  filter: yup.string().optional(),
});

export const getAllValidation = validation({
  query: queryValidation,
});

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response,
) => {
  const listOfCidades = [
    {
      nome: "Planaltina",
      estado: "Goiás",
    },
    {
      nome: "Brasília",
      estado: "Distrito Federal",
    },
  ];
  res.status(StatusCodes.OK).json({
    cidades: listOfCidades,
  });
  return;
};
