import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['qwerty'] }));
app.use(router);
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send(`
  <div>
    <h1>Hello there</h1>
  </div>
  `);
});

app.listen(3000, () => console.log('listening on port http://localhost:3000'));
