import express from 'express';
import cors from 'cors';
import router  from './routes/paletas.routes.js';
import usuariosRouter from './routes/usuarios.routes';
import loginRouter from './routes/login.routes';
//const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());


app.use('/paletas', router);
app.use('/usuarios', usuariosRouter);
app.use('/login', loginRouter);

export default app;
