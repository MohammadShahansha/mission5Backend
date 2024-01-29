import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { shoesRoutes } from './app/modules/shoes/shoes.routes';
// const express = require("express");
const app: Application = express();
// const port = 3000;

//parsers
app.use(express.json());
app.use(cors());

app.use('/api', shoesRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
export default app;
