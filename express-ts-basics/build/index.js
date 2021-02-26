"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const loginRoutes_1 = require("./routes/loginRoutes");
const helmet_1 = __importDefault(require("helmet"));
const app = express_1.default();
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(cookie_session_1.default({ keys: ['qwerty'] }));
app.use(loginRoutes_1.router);
app.get('/', (_req, res, _next) => {
    res.send(`
  <div>
    <h1>Hello there</h1>
  </div>
  `);
});
app.listen(3000, () => console.log('listening on port http://localhost:3000'));
