import { Router, Request, Response, NextFunction } from 'express';
import {get, controller} from './decorators'

@controller('/auth')
class LoginController {
  @get('/login')
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
