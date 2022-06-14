import PaletasService from "../service/paletas.service";

const paletasService = new PaletasService();

class PaletasController {
  async ListarTodas(req, res) {
    try {
      const paletas = await paletasService.ListarTodas();
      res.send(paletas);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }
  async ListarUmaPaletaPorId(req, res) {
    const idParam = req.params.id;
    const paleta = await paletasService.ListarUmaPaletaPorId(idParam);
    res.send(paleta);
  }
  async CriarNovaPaleta(req, res) {
    const { sabor, descricao, foto, preco } = req.body;

    const newPaleta = await paletasService.CriarNovaPaleta({
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
  async AtualizarPaleta(req, res) {
    const { sabor, descricao, foto, preco } = req.body;
    const id = req.params.id;

    const updatedPaleta = await paletasService.AtualizarPaleta({
      sabor,
      descricao,
      foto,
      preco,
      id,
    });
    res.status(200).send(updatedPaleta);
  }
  ExcluirPaleta(req, res) {
    const id = req.params.id;
    const paleta = paletasService.ExcluirPaleta({ id });
    res.status(200).send(paleta);
  }
}
/*export const updatePaleta = (req, res) => {
    const idParam = +req.params.id;
    const paletaEdited = req.body;
    const updatedPaleta = paletasService.updatePaleta(idParam, paletaEdited);
    res.send(updatedPaleta);
}*/

export default PaletasController;
