import { Router } from 'express';

import { auth } from './middleware/auth';
import { getUser, index, login, signUp } from './controller/UserController';
import { addMovie, getMovies, deleteMovie } from './controller/MoviesController'
const routes = Router();

routes.get('/api', index)
routes.post('/api/signup', signUp);
routes.post('/api/session', login);

routes.use(auth);
routes.get('/api/user/:id', getUser);

routes.get('/api/movies/:user_id', getMovies);
routes.post('/api/movie', addMovie);
routes.delete('/api/movie', deleteMovie);

export default routes;
