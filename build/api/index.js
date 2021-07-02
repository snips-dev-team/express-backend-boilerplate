"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var health_check_1 = require("./routes/health_check");
var routes = function () {
    var router = express_1.Router();
    health_check_1.healthCheckRoute(router);
    return router;
};
exports.routes = routes;
