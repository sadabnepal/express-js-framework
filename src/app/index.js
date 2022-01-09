import express from "express";
import bodyParser from 'body-parser'
import userRoutes from "./routes/users.js";
import { WELCOME_MESSAGE } from "../static/constants.js";
import { HOSTNAME, PORT } from "../helper/envreader.js";

const app = express();

app.get('/', (req, res) => res.send(WELCOME_MESSAGE))

app.use(bodyParser.json())
app.use('/users', userRoutes)

app.listen(PORT, () => console.log(`Server running on ${HOSTNAME}:${PORT}`))