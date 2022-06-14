import mongoose from 'mongoose';
import Paleta from '../models/paletas.model'
//import paletas from '../database/db'
const verifyIdOfPaletaMiddleware = async (req, res, next) => {
    const id = req.params.id;
    
    /*const paleta = paletas.find((paleta) => paleta.id === id);
    if(!paleta){
        return res.status(404).send('Paleta não encontrada!');
    }*/
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({ message: 'Id inválido!'});
    }
    const paleta = await Paleta.findById(id);
    
    if(!paleta){
        return res.status(404).send('Paleta não encontrada');
    }
    next();
};

export default verifyIdOfPaletaMiddleware;
