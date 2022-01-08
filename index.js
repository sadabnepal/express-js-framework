import express from "express";
import bodyParser from 'body-parser'
import userRoutes from "./app/routes/users.js";
import { WELCOME_MESSAGE } from "./common/constants.js";
import { HOSTNAME, PORT } from "./common/config.js";

const app = express();

app.get('/', (req, res) => res.send(WELCOME_MESSAGE))

app.use(bodyParser.json())
app.use('/users', userRoutes)

app.listen(PORT, () => console.log(`Server running on ${HOSTNAME}:${PORT}`))