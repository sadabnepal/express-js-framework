import { config } from "dotenv";
config();

export const HOSTNAME = process.env.HOSTNAME;
export const PORT = process.env.PORT;