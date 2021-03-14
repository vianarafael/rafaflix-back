import { Router } from 'express';

import { auth } from './middleware/auth';
import { getUser, index, login, signUp } from './controller/UserController'
const routes = Router();

routes.get('/', index)
routes.post('/signup', signUp);
routes.post('/session', login)

routes.use(auth);
routes.get('/user/:id', getUser);


export default routes;
