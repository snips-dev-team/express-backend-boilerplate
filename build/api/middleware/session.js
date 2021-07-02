"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMiddleware = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../../config"));
var password = config_1.default.session.password;
// Verify authentication
var sessionMiddleware = function (req, res, next) {
    var authorizationField = req.headers["authorization"];
    if (!authorizationField) {
        res.status(401).json({
            error: true,
            message: "No token provided.",
            result: "You need to send a token",
        });
        return;
    }
    if (!password)
        return;
    var token = authorizationField.split("Bearer ")[1];
    try {
        var data = jsonwebtoken_1.default.verify(token, password);
        req.user = data;
        next();
    }
    catch (_a) {
        res
            .status(401)
            .json({ auth: false, message: "Failed to authenticate token." });
    }
};
exports.sessionMiddleware = sessionMiddleware;
