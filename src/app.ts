import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { shoesRoutes } from './app/modules/shoes/shoes.routes';
import { registerRoutes } from './app/modules/registration/registration.route';
import { loginRoutes } from './app/modules/login/login.route';
import { sellsRoutes } from './app/modules/sells/sells.route';
import { polishRequest } from './app/modules/polishRequest/polishReqest.route';
const app: Application = express();

const allowedOrigins = [
  'https://warm-shortbread-0db074.netlify.app',
  'http://localhost:5173',
];

// Configure CORS middleware
const corsOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  origin: (origin: any, callback: any) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg =
        'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', shoesRoutes);
app.use('/api/auth', registerRoutes);
app.use('/api/auth', loginRoutes);
app.use('/api', sellsRoutes);
app.use('/api', polishRequest);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
// app.options('*', cors());
app.options('*', cors(corsOptions));
export default app;
