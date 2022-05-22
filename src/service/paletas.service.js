import paletas from "../database/db";

class PaletasService {
  ListarTodas() {
    if (paletas.length === 0) {
      throw { status: 404, message: "Nenhuma paleta cadastrada" };
    }
    return paletas;
  }

  ListarUmaPaletaPorId(idParam) {
    const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);
    return chosenPaleta;
  }
  /*CriarNovaPaleta(sabor, descricao, foto, preco){
        const newPaleta = {
            id: paletas.length + 1,
            sabor,
            descricao,
            foto,
            preco,
        };
        paletas.push(newPaleta);
        return newPaleta;
    }*/
  CriarNovaPaleta({ sabor, descricao, foto, preco }) {
    const newId = paletas.length === 0 ? 1 : paletas[paletas.length - 1].id + 1;
    const newPaleta = {
      id: newId,
      sabor,
      descricao,
      foto,
      preco,
    };

    paletas.push(newPaleta);

    return newPaleta;
  }
  /*CriarNovaPaleta(newPaleta){
        const newId = paletas.length === 0 ? 1 : paletas[paletas.length - 1].id + 1; 
        //const newId = paletas.length + 1;
        //newPaleta.id = newId;
        newPaleta = {
            id: newId,
            sabor,
            descricao,
            foto,
            preco
        };
        paletas.push(newPaleta);
        return newPaleta;
    }*/
  AtualizarPaleta({ sabor, descricao, foto, preco, id }) {
    const paletaAtualizada = { sabor, descricao, foto, preco, id };
    const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
    paletas[paletaIndex] = paletaAtualizada;

    return paletaAtualizada;
  }

  ExcluirPaleta({ id }) {
    const paletaIndex = paletas.findIndex((elem) => elem.id === id);
    paletas.splice(paletaIndex, 1);
  }
}

export default PaletasService;
