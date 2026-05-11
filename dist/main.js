"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
exports.sum = sum;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.post('/', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    res.send({ "sum": a + b });
});
function sum(a, b) {
    return a + b;
}
console.log("Hello world ");
//# sourceMappingURL=main.js.map