import Paleta from "../models/paletas.model";

class PaletasService {
  async ListarTodas() {
  //  if (paletas.length === 0) {
  //    throw { status: 404, message: "Nenhuma paleta cadastrada" };
  //  }
  //  return paletas;
  const paletasMongo = await Paleta.find();
  
  if(paletasMongo.length === 0){
    throw { status: 404, message: "Nenhuma paleta cadastrada"};
  }

  return paletasMongo;
  }


  async ListarUmaPaletaPorId(idParam) {
    ///const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);
    const chosenPaleta = await Paleta.findById(idParam);
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
  async CriarNovaPaleta({ sabor, descricao, foto, preco }) {
    //const newId = paletas.length === 0 ? 1 : paletas[paletas.length - 1].id + 1;
    //paletas.push(newPaleta);
    const newPaleta = {
      sabor,
      descricao,
      foto,
      preco,
    };

    const paleta = await Paleta.create(newPaleta);
    return paleta;
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
  async AtualizarPaleta({ sabor, descricao, foto, preco, id }) {
    const paletaDados = { sabor, descricao, foto, preco};
    const paletaIndex =  id ;
    const paleta = await Paleta.findByIdAndUpdate(paletaIndex, paletaDados);
    
    //const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
    //paletas[paletaIndex] = paletaAtualizada;
    //const paleta = Paleta.findByIdAndUpdate(paletaAtualizada);

    return paleta;
  }

  async ExcluirPaleta({ id }) {
    //const paletaIndex = paletas.findIndex((elem) => elem.id === id);
    //paletas.splice(paletaIndex, 1);
    const paletaIndex = await Paleta.findByIdAndDelete(id);
    return paletaIndex;
  }
}

export default PaletasService;
