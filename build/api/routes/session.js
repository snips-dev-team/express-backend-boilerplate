"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRoute = void 0;
var express_1 = require("express");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../../config"));
var password = config_1.default.session.password;
var users = [{ id: 1, email: "paulo@mesquita.dev", password: "PauloLuiz" }];
var sessionRoute = function (app) {
    if (!password)
        return;
    var route = express_1.Router();
    app.use("/session", route);
    route.post("/login", function (req, res) {
        var data = req.body;
        var user = users.filter(function (user) { return user.email === data.email && user.password === data.password; });
        if (user.length > 0) {
            return res.json({ token: jsonwebtoken_1.default.sign({ user: user }, password) });
        }
        else {
            res.status(403).json({ ok: false });
        }
    });
    return route;
};
exports.sessionRoute = sessionRoute;
