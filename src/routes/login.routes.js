import { Router } from 'express';
import loginController from '../controllers/login.controller';


const loginRouter = Router();
const LoginController = new loginController();

loginRouter.post("", LoginController.realizarLogin);

export default loginRouter;
