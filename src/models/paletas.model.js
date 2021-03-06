import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PaletaSchema = new Schema({
    sabor: { type: String, required: true, unique: true },
    descricao: { type: String, required: true },
    foto: { type: String, required: true },
    preco: { type: Number, required: true},
},
{ versionKey: false},
);

const Paleta = model('paletas', PaletaSchema);
//'paletas' nome da coleção para qual o modelo será usado;
//model é uma função pré-definida no mongoose;
//mongoosejs.com

export default Paleta;
