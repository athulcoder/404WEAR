import { createServer } from "http";
import { createApp } from "./app";


export function createHttpServer(){
    const app = createApp();

    return createServer(app);
}
