"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("./middleware/auth");
var UserController_1 = require("./controller/UserController");
var MoviesController_1 = require("./controller/MoviesController");
var routes = express_1.Router();
routes.get('/api', UserController_1.index);
routes.post('/api/signup', UserController_1.signUp);
routes.post('/api/session', UserController_1.login);
routes.use(auth_1.auth);
routes.get('/api/user/:id', UserController_1.getUser);
routes.get('/api/movies/:user_id', MoviesController_1.getMovies);
routes.post('/api/movie', MoviesController_1.addMovie);
routes.delete('/api/movie', MoviesController_1.deleteMovie);
exports.default = routes;
//# sourceMappingURL=routes.js.map