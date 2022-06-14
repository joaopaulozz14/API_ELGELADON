const verifyDataUsuarioMiddleware = async (req, res, next) => {
  const { nome, email, senha } = req.body;
  if(!nome || !email || !senha){
      return res.status(422).send('Dados incompletos');
  } 
  next();
};

export default verifyDataUsuarioMiddleware;
