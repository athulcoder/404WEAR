import mongoose from "mongoose";
import { logger } from "../../../logger";


export function registerMongoEvents():void{

    mongoose.connection.on("connected", ()=>{
        logger.info("MongoDb connected");
    })

    mongoose.connection.on("disconnected",()=>{
        logger.warn("MongoDb disconnected");
    })
    mongoose.connection.on("reconnected",()=>{
        logger.info("MongoDb reconnected");
    })

    mongoose.connection.on("error",(error:Error)=>{
        logger.error(`MongoDb error : ${error.message}`)
    })
}