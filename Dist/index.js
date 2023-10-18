"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello');
});
app.get('/hi', (req, res) => {
    res.send('Hello World ki khobor!');
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
