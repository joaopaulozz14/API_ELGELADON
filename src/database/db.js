import mongoose from 'mongoose';

const mongoose = require('mongoose');
export const connectToDataBase = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB Conectado`);
  })
  .catch((err) => {
    console.log(`Erro na conexão com o MongoDB: ${err}`);
  });
}
