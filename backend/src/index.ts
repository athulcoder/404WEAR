import { createHttpServer } from "./bootstrap/server";
import { bootstrapDatabase } from "./bootstrap/database";
import { env } from "./config/env";
import { logger } from "./infrastructure/logger";

const PORT = env.PORT;

async function bootstrapApplication(){
    try{
        await bootstrapDatabase();

        const server = createHttpServer();

        server.listen(PORT, ()=>{
            logger.info(`Server started listening on ${PORT}`);
        })
    }
    catch(error){
        logger.fatal(error, 'Application failed to start');
        process.exit(1);
    }
}

bootstrapApplication();