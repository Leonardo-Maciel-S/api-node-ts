import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

interface ICidade {
  name: string;
}

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
  const { name } = req.body;

  res.status(StatusCodes.CREATED).json({ name });
};
