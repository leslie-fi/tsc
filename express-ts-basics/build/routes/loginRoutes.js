"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (!!req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.sendStatus(403);
}
var router = express_1.Router();
exports.router = router;
// router.get('/login', (_req: Request, res: Response, _next: NextFunction) => {
// });
router.post('/login', function (req, res, _next) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'pw') {
        //mark person as logged in
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid credentials');
    }
});
router.get('/', function (req, res, _next) {
    if (!!req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You are logged in!</div>\n        <a href='/logout'>Log Out</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <div>You are NOT logged in!</div>\n        <a href='/login'>Log In</a>\n      </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (_req, res) {
    res.send('Welcome to protected route, logged in uzer!');
});
