import PaletasService from "../service/paletas.service";

const paletasService = new PaletasService();

class PaletasController {
  ListarTodas(req, res) {
    try {
      const paletas = paletasService.ListarTodas();
      res.send(paletas);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }
  ListarUmaPaletaPorId(req, res) {
    const idParam = +req.params.id;
    const paleta = paletasService.ListarUmaPaletaPorId(idParam);
    res.send(paleta);
  }
  CriarNovaPaleta(req, res) {
    const { sabor, descricao, foto, preco } = req.body;

    const newPaleta = paletasService.CriarNovaPaleta({
      sabor,
      descricao,
      preco,
      foto,
    });

    res.status(201).send(newPaleta);
  }
  /*CriarNovaPaleta(req, res){
        //const sabor = req.body.sabor;
        //const foto = req.body.foto;
        //const descricao = req.body.descricao;
        //const preco = req.body.preco;
        
        /*const { sabor,descricao, foto, preco} = req.body;
        const newPaleta = paletasService.CriarNovaPaleta(sabor,descricao, foto, preco);
        res.send(newPaleta);
        */
  /* const paleta = req.body;
       const newPaleta = paletasService.CriarNovaPaleta(paleta);
       res.status(201).send(newPaleta);
    }*/
  AtualizarPaleta(req, res) {
    const { sabor, descricao, foto, preco } = req.body;
    const id = +req.params.id;

    const updatedPaleta = paletasService.AtualizarPaleta({
      sabor,
      descricao,
      foto,
      preco,
      id,
    });
    res.send(updatedPaleta);
  }
  ExcluirPaleta(req, res) {
    const id = +req.params.id;
    paletasService.ExcluirPaleta({ id });
    res.sendStatus(204);
  }
}
/*export const updatePaleta = (req, res) => {
    const idParam = +req.params.id;
    const paletaEdited = req.body;
    const updatedPaleta = paletasService.updatePaleta(idParam, paletaEdited);
    res.send(updatedPaleta);
}*/

export default PaletasController;
