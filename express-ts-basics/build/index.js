"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var loginRoutes_1 = require("./routes/loginRoutes");
var helmet_1 = __importDefault(require("helmet"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
var app = express_1.default();
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cookie_session_1.default({ keys: ['qwerty'] }));
app.use(loginRoutes_1.router);
app.use(AppRouter_1.AppRouter.getInstance());
app.get('/', function (_req, res, _next) {
    res.send("\n  <div>\n    <h1>Hello there</h1>\n  </div>\n  ");
});
app.listen(3000, function () { return console.log('listening on port http://localhost:3000'); });
