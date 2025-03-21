import { Request, Response, Router } from "express";
import { cidadesController } from "../controllers/cidades";

const router = Router();

const test = (_: Request, res: Response) => {
  res.send("teste");
  return;
};

router.get("/", test);
router.post(
  "/cidades",
  cidadesController.createBodyValidator,
  cidadesController.createQueryValidator,
  cidadesController.create,
);

export { router };
