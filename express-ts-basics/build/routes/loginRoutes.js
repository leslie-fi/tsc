"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (!!req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.sendStatus(403);
}
const router = express_1.Router();
exports.router = router;
router.get('/login', (req, res, next) => {
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
});
router.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === 'pw') {
        //mark person as logged in
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid credentials');
    }
});
router.get('/', (req, res, next) => {
    if (!!req.session && req.session.loggedIn) {
        res.send(`
      <div>
        <div>You are logged in!</div>
        <a href='/logout'>Log Out</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <div>You are NOT logged in!</div>
        <a href='/login'>Log In</a>
      </div>
    `);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send('Welcome to protected route, logged in uzer!');
});
