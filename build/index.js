"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/env");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var express = require("express");
var cors = require("cors");
var routes_1 = require("./routes");
typeorm_1.createConnection();
var app = express();
app.use(cors());
app.use(express.json());
app.use(routes_1.default);
var port = process.env.PORT || 3333;
app.listen(port);
//# sourceMappingURL=index.js.map