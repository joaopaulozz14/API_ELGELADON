import { Router } from "express";
import UsuariosController from "../controllers/usuarios.controller";
import verifyIdOfUsuarioMiddleware from '../middlewares/verifyIdOfUsuario.middleware.js';
import verifyDataUsuarioMiddleware from '../middlewares/verifyDataUsuario.middleware.js';
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";

const usuariosRouter = Router();
const usuariosController = new UsuariosController();

usuariosRouter.get("", usuariosController.findAll);

usuariosRouter.get(
  "/one-usuario/:id",
  verifyIdOfUsuarioMiddleware,
  usuariosController.findById
);

usuariosRouter.post(
  "/create-usuario",
  verifyDataUsuarioMiddleware,
  usuariosController.createUsuario
);

usuariosRouter.put(
  "/update-usuario/:id",
  verifyIdOfUsuarioMiddleware,
  verifyDataUsuarioMiddleware,
  usuariosController.updateUsuario
);

usuariosRouter.delete(
  "/delete-usuario/:id",
  verifyIdOfUsuarioMiddleware,
  verifyTokenMiddleware,
  usuariosController.deleteUsuario
);

export default usuariosRouter;
