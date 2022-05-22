import express from 'express';
import cors from 'cors';
import router  from './routes/paletas.routes.js';
//const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());


app.use('/paletas', router);

export default app;
