"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./config"));
var loaders_1 = require("./loaders");
var port = config_1.default.application.port;
var app = express_1.default();
loaders_1.loaders(app);
app.listen(port, function () { return console.log("Running on port " + port); });
