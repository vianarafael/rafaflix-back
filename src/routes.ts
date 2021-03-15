import { Router } from 'express';

import { auth } from './middleware/auth';
import { getUser, index, login, signUp } from './controller/UserController';
import { addMovie, getMovies } from './controller/MoviesController'
const routes = Router();

routes.get('/', index)
routes.post('/signup', signUp);
routes.post('/session', login)

routes.use(auth);
routes.get('/user/:id', getUser);

routes.get('/movies/:user_id', getMovies);
routes.post('/movie', addMovie);


export default routes;
