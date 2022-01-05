import express from "express";
import bodyParser from 'body-parser'
import userRoutes from "./app/routes/users.js";
import { WELCOME_MESSAGE } from "./static/constants.js";
import { BASEURL, PORT } from "./tests/config/setup.js";

const app = express();

app.use(bodyParser.json())

app.use('/users', userRoutes)

app.get('/', (req, res) => res.send(WELCOME_MESSAGE))

app.listen(PORT, () => console.log(`Server running on ${BASEURL}`))