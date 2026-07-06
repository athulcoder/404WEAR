import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import { requestLogger } from "../infrastructure/logger";
import { notFoundHandler } from "../presentation/middlewares/not-found";
import { errorHandler } from "../presentation/middlewares/error-handler";


export function createApp(){
const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(requestLogger);

// route here

app.use(notFoundHandler);
app.use(errorHandler)
return app;

}



