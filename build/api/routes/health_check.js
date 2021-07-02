"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckRoute = void 0;
var express_1 = require("express");
var healthCheckRoute = function (app) {
    var route = express_1.Router();
    app.use("/health_check", route);
    route.get("/", function (_, res) {
        res.status(200).json({ ok: true });
    });
    return route;
};
exports.healthCheckRoute = healthCheckRoute;
