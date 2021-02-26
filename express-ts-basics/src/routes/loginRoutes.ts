import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
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

router.get('/login', (_req: Request, res: Response, _next: NextFunction) => {
  res.send(
    `
      <form method='POST'>
        <div><label for="email">Email</label>
          <input name="email" type="text">
            <div><label for="password">Password</label><input name="password" type="password"></div>
          </input>
        </div>
        <button>Submit</button>
      </form>
    `
  );
});

router.post(
  '/login',
  (req: RequestWithBody, res: Response, _next: NextFunction) => {
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === 'pw') {
      //mark person as logged in
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid credentials');
    }
  }
);

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
        <a href='/login'>Log In</a>
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
