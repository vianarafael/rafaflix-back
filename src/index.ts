import './config/env';
import 'reflect-metadata';
import {createConnection} from 'typeorm';
import * as express from 'express';
import * as cors from 'cors';
import routes  from './routes'

createConnection();
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333;
app.listen(port);
