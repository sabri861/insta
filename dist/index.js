"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const express_2 = require("./app/src/config/express");
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.PORT;
exports.app = (0, express_1.default)();
(0, express_2.configureExpress)(exports.app);
mongoose_1.default.connect(process.env.URL_MONGODB).then(() => {
    console.log('ok');
}).catch((e) => {
    console.log(e);
});
exports.app.listen(PORT, () => {
    console.info(`Starting server on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map