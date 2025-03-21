import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (_: Request, res: Response) => {
  res.json({
    response: "Hello World",
  });
});

router.post(
  "/teste",
  (
    req: Request<{}, {}, { name: string }, { teste: string }>,
    res: Response,
  ) => {
    const { name } = req.body;
    const { teste } = req.query;
    res.status(StatusCodes.OK).json({ name, teste });
  },
);

export { router };
