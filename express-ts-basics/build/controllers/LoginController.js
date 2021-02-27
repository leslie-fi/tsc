"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.add = function (a, b) {
        return a + b;
    };
    LoginController.prototype.getLogin = function (_req, res) {
        res.send("\n      <form method='POST'>\n        <div><label for=\"email\">Email</label>\n          <input name=\"email\" type=\"text\">\n            <div><label for=\"password\">Password</label><input name=\"password\" type=\"password\"></div>\n          </input>\n        </div>\n        <button>Submit</button>\n      </form>\n    ");
    };
    LoginController.prototype.postLogin = function (req, res, _next) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email && password && email === 'hi@hi.com' && password === 'pw') {
            //mark person as logged in
            req.session = { loggedIn: true };
            res.redirect('/');
        }
        else {
            res.send('Invalid credentials');
        }
    };
    LoginController.prototype.getLogout = function (req, res, _next) {
        req.session = undefined;
        res.redirect('/');
    };
    __decorate([
        decorators_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "add", null);
    __decorate([
        decorators_1.get('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        decorators_1.post('/login'),
        decorators_1.bodyValidator('email', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "postLogin", null);
    __decorate([
        decorators_1.get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogout", null);
    LoginController = __decorate([
        decorators_1.controller('/auth')
    ], LoginController);
    return LoginController;
}());
