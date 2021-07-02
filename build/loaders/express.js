"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressLoader = void 0;
var express_1 = require("express");
var cors_1 = __importDefault(require("cors"));
var config_1 = __importDefault(require("../config"));
var api_1 = require("../api");
var prefix = config_1.default.api.prefix;
var expressLoader = function (app) {
    if (!prefix)
        return;
    app.use(cors_1.default());
    app.use(express_1.json());
    app.use(prefix, api_1.routes());
};
exports.expressLoader = expressLoader;
