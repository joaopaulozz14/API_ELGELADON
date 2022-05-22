import { Router } from "express";
import PaletasController from "../controllers/paletas.controller";
import verifyIdOfPaletaMiddleware from "../middlewares/verifyIdOfPaleta.middleware";
import verifyDataOfPaleta from "../middlewares/verifyDataOfPaleta.middleware";
const router = Router();
const paletasController = new PaletasController();

router.get("/all-paletas", paletasController.ListarTodas);
router.get(
  "/one-paleta/:id",
  verifyIdOfPaletaMiddleware,
  paletasController.ListarUmaPaletaPorId
);
router.post(
  "/create-paleta",
  verifyDataOfPaleta,
  paletasController.CriarNovaPaleta
);
router.put(
  "/update-paleta/:id",
  verifyIdOfPaletaMiddleware,
  verifyDataOfPaleta,
  paletasController.AtualizarPaleta
);
router.delete(
  "/delete-paleta/:id",
  verifyIdOfPaletaMiddleware,
  paletasController.ExcluirPaleta
);

export default router;
