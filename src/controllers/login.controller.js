import loginService from "../service/login.service";

const LoginService = new loginService();

class loginController {
    async realizarLogin(req, res) {
        const {email, senha} = req.body;

        const login = await LoginService.realizarLogin({email, senha});

        res.status(login.status).send(login.token);
    }
}

export default loginController;
