import { Request, Response, NextFunction } from 'express';

import { get, controller, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!!req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.sendStatus(403);
}
@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response, _next: NextFunction): void {
    if (!!req.session && req.session.loggedIn) {
      res.send(`
      <div>
        <div>You are logged in!</div>
        <a href='/logout'>Log Out</a>
      </div>
    `);
    } else {
      res.send(`
      <div>
        <div>You are NOT logged in!</div>
        <a href='/auth/login'>Log In</a>
      </div>
    `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(_req: Request, res: Response): void {
    res.send('Welcome to protected route, logged in uzer!');
  }
}
