import { ConnectOptions } from "mongoose";


export const connectionOptions : ConnectOptions ={
    autoIndex:true, //false in production
    maxPoolSize:10,
    serverSelectionTimeoutMS:5000,
    socketTimeoutMS:45000
}