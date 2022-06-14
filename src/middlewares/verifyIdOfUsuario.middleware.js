import mongoose from "mongoose";
import Usuarios from "../models/usuarios.model";

const verifyIdOfUsuarioMiddleware = (req, res, next) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({ message: 'Id inválido!'});
    }
    const usuario = Usuarios.findById(id);

    if(!usuario){
        return res.status(404).send({meesage: 'Usuário não encontrado'});
    }
    next();
}

export default verifyIdOfUsuarioMiddleware;
