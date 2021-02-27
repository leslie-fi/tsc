import { Router, Request, Response, NextFunction } from 'express';

export interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!!req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.sendStatus(403);
}

const router = Router();
router.get('/', (req: RequestWithBody, res: Response, _next: NextFunction) => {
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
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth,  (_req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in uzer!')
})

export { router };
