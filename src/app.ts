import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { shoesRoutes } from './app/modules/shoes/shoes.routes';
import { registerRoutes } from './app/modules/registration/registration.route';
import { loginRoutes } from './app/modules/login/login.route';
import { sellsRoutes } from './app/modules/sells/sells.route';
import { polishRequest } from './app/modules/polishRequest/polishReqest.route';
const app: Application = express();

//parsers
app.use(
  cors({
    origin: 'https://warm-shortbread-0db074.netlify.app',
    credentials: true,
  }),
);
app.use(express.json());

app.use('/api', shoesRoutes);
app.use('/api/auth', registerRoutes);
app.use('/api/auth', loginRoutes);
app.use('/api', sellsRoutes);
app.use('/api', polishRequest);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.options('*', cors());
export default app;

// const corsConfig = {
//   origin: 'https://warm-shortbread-0db074.netlify.app',
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// };
// app.use(cors(corsConfig));
// app.options("", cors(corsConfig))
