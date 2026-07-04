
import dotenv from "dotenv";


dotenv.config();

interface EnvConfig{
    PORT:number;
    MONGO_URI: string;
    NODE_ENV:"development" |"production";
    JWT_SECRET:string;

}


function getEnv(key : string):string{

    const value = process.env[key];

    if(!value) throw new Error(`Env var ${key} doesn't exist`);

    return value;
}


export const env:EnvConfig ={
    PORT: parseInt(getEnv("PORT"),10) ||5000,
    MONGO_URI : getEnv("MONGO_URI"),
    NODE_ENV:  (process.env.NODE_ENV as "development" | "production") || "development",
    JWT_SECRET:getEnv("JWT_SECRET")


}