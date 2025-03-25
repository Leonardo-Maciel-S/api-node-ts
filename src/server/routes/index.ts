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

router.get(
  "/cidades/:id",
  cidadesController.getByIdValidation,
  cidadesController.getById,
);

router.put(
  "/cidades/:id",
  cidadesController.updateByIdValidation,
  cidadesController.updateById,
);

router.delete(
  "/cidades/:id",
  cidadesController.deleteByIdValidation,
  cidadesController.deleteById,
);

export { router };
