"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./logger");
const app = (0, express_1.default)();
app.use(logger_1.expressLogger);
const port = 3000;
app.get('/', (req, res) => {
    res.send('May be i love you <3');
});
app.listen(port, () => {
    console.log("love u");
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map