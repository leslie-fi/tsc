import { Router, Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

function logger(_req: Request, res: Response, next: NextFunction) {
  console.log('request was made z0mg');
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(_req: Request, res: Response): void {
    res.send(`
      <form method='POST'>
        <div><label for="email">Email</label>
          <input name="email" type="text">
            <div><label for="password">Password</label><input name="password" type="password"></div>
          </input>
        </div>
        <button>Submit</button>
      </form>
    `);
  }
}
