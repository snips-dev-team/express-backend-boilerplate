"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loaders = void 0;
var express_1 = require("./express");
var loaders = function (app) {
    express_1.expressLoader(app);
};
exports.loaders = loaders;
