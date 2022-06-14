import UsuariosService from "../service/usuarios.service";

const usuariosService = new UsuariosService();

class UsuariosController {
  async findAll(req, res) {
    const usuarios = await usuariosService.findAll();
    res.send(usuarios);
  }

  async findById(req, res) {
    const id = req.params.id;

    const usuario = await usuariosService.findById(id);
    res.send(usuario);
  }

  async createUsuario(req, res) {
    // const email = request.body.email;
    // const nome = request.body.nome;
    // const senha = request.body.senha;
    // const adm = request.body.adm;
    const { email, nome, senha, adm } = req.body;
    try{
      const usuario = await usuariosService.createUsuario({
        email,
        nome,
        senha,
        adm,
      });
      res.status(201).send(usuario);
    }catch(error){
      if(error.code === 11000){
        res.status(400).send("Email já cadastrado!");
      }
    }
  }

  async updateUsuario(req, res) {
    const id = req.params.id;
    const { email, nome, senha, adm } = req.body;

    try{
      const usuario = await usuariosService.updateUsuario({
        id,
        email,
        nome,
        senha,
        adm,
      });
  
      res.send(usuario);
    }catch(error){
      res.status(400).send("Email já cadastrado!");
    }
  }

  async deleteUsuario(req, res) {
    const id = req.params.id;
    const usuario = await usuariosService.deletePaleta({id});
    res.status(204).send(usuario);
  }
}

export default UsuariosController;
