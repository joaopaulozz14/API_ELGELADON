import paletas from '../database/db'
const verifyIdOfPaletaMiddleware = (req, res, next) => {
    const id = +req.params.id;
    
    const paleta = paletas.find((paleta) => paleta.id === id);
    if(!paleta){
        return res.status(404).send('Paleta não encontrada!');
    }
    next();
};

export default verifyIdOfPaletaMiddleware;
