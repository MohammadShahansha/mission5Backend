import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { shoesRoutes } from './app/modules/shoes/shoes.routes';
import { registerRoutes } from './app/modules/registration/registration.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api', shoesRoutes);
app.use('/api/auth', registerRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
export default app;
