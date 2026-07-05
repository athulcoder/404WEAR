import { registerMongoEvents } from "./events";
import { env } from "../../../../config/env";
import { connectionOptions } from "./options";
import { logger } from "../../../logger";
import mongoose from "mongoose";


let isConnected = false;

export async function connectDatabase(){

    if(isConnected){
        logger.info('Using exisitng MongoDb connection ');
        return mongoose.connection;
    }
    try{
        registerMongoEvents();
        const conn = await mongoose.connect(env.MONGO_URI,connectionOptions);

        isConnected =conn.connections[0].readyState ===1;
        logger.info(`MongoDB connection established `);
        return mongoose.connection;
    }
    catch(error){
        logger.error(`Mongodb connection error : ${error}`);
        throw error;
    }
}


