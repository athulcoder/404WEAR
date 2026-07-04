import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import routes from "./routes";
import { requestLogger } from "../infrastructure/logger";
import { notFoundHandler } from "./middlewares/not-found";
import { errorHandler } from "./middlewares/error-handler";


export function createApp(){
const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(notFoundHandler);
app.use(errorHandler)
app.use(requestLogger);

app.use("/api/v1", routes);


return app
}



