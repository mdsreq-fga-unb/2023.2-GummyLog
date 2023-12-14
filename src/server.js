import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/router.js";

dotenv.config();

const server = express();

server.use(cors());
server.use(json());
server.use(router);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`server runing on PORT ${PORT}`);
});

export default server;