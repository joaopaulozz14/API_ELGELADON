import jwt from "jsonwebtoken";

const verifyTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if(token === undefined){
        return res.status(401).send('Token não enviado');
    }

    jwt.verify(token,'chave_secreta', (error) => {
        if(error){
            return res.status(401).send('Token inválido');
        }
        next();
    });
};

export default verifyTokenMiddleware;
