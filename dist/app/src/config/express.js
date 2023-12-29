"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureExpress = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
function configureExpress(app) {
    app.use(express_1.default.json());
}
exports.configureExpress = configureExpress;
//# sourceMappingURL=express.js.map