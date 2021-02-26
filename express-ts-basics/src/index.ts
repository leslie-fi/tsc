import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';
import helmet from 'helmet';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cookieSession({ keys: ['qwerty'] }));
app.use(router);
app.use(AppRouter.getInstance());


app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.send(`
  <div>
    <h1>Hello there</h1>
  </div>
  `);
});

app.listen(3000, () => console.log('listening on port http://localhost:3000'));
