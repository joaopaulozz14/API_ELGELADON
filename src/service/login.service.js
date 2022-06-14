import bcryptjs from "bcryptjs";
import Usuarios from "../models/usuarios.model";
import jwt from "jsonwebtoken";
class loginService {
  async realizarLogin({ email, senha }) {
    //Ache no banco de dados o email com o valor passado(email);
    const usuario = await Usuarios.findOne({ email: email });

    if (!usuario) {
      return { status: 400, mensagem: "Email incorreto" };
    }

    const senhaValida = await bcryptjs.compare(senha, usuario.senha);

    if (!senhaValida) {
      return { status: 400, message: "Senha incorreta" };
    }

    //Comparação sem hash
    //if(usuario.senha !== senha){
    //    return { status: 400, mensagem: 'Senha incorreta' };
    //}
    const token = jwt.sign({ email: email }, "chave_secreta", {
      expiresIn: "24h",
    });
    return { status: 200, token: token };
  }
}

export default loginService;
