import { Router, Request, Response} from 'express';
import { appendFile } from 'fs';

import { auth } from './middleware/auth';
const routes = Router();

routes.use(auth);

module.exports = routes;
