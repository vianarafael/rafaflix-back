import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";

import auth from "./middleware/auth";

createConnection();
const app = express();
app.use(express.json());


app.listen(3333);
