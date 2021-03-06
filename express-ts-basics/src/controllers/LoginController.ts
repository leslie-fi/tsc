import { Request, Response, NextFunction } from 'express';
import { get, controller, post, bodyValidator } from './decorators';

export interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

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
  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response, _next: NextFunction): void {
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === 'pw') {
      //mark person as logged in
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid credentials');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response, _next: NextFunction): void {
    req.session = undefined;
    res.redirect('/');
  }
}
