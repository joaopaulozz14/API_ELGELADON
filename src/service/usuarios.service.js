import Usuarios from "../models/usuarios.model";
import bcryptjs from 'bcryptjs';
class UsuariosService {
  async findAll() {
    const usuarios = await Usuarios.find();

    return usuarios;
  }
  async findById({ id }) {
    const usuario = await Usuarios.findById(id).exec();
    return usuario;
  }
  async createUsuario({ email, nome, senha, adm }) {
    // Recebe 2 Paramêtros, o primeiro é a senha e o segundo é o número de vezes que ela será criptografada
    const senhaCriptografada = await bcryptjs.hash(senha, 8)
    const newUsuario = {
      email,
      nome,
      senha: senhaCriptografada,
      adm,
    };
    const usuario = await Usuarios.create(newUsuario);
    return usuario;
  }
  async updateUsuario({id, email, nome, senha, adm}){
      const updateUsuario = {
          email,
          nome,
          senha,
          adm,
      };
      //Pode ser outras especificações como {nome: nome}
      //Atualizando
      await Usuarios.updateOne({ _id: id }, updateUsuario);
      //Pegando os dados atualizados para retornar para os dados para o usuário;
      const usuario = Usuarios.findById(id);
      return usuario;
  }

  async deletePaleta({ id }){
    await Usuarios.findByIdAndDelete(id);

  }
}

export default UsuariosService;
