import "reflect-metadata";
import express from "express";

import "./database";
import { routes } from "./routes";

const port = 3000;

const app = express();

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`Server is run in ${port}`));
