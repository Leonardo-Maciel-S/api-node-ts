import { Request, Response, Router } from "express";
import { cidadesController } from "../controllers/cidades";

const router = Router();

const test = (_: Request, res: Response) => {
  res.send("teste");
  return;
};

router.get("/", test);

router.get(
  "/cidades",
  cidadesController.getAllValidation,
  cidadesController.getAll,
);

router.post(
  "/cidades",
  cidadesController.createValidation,
  cidadesController.create,
);

export { router };
