import { createHttpServer } from "./app/server";


const server = createHttpServer();

const PORT = 5050;

server.listen(PORT, ()=>{

    console.log(`Server started listening on port number : ${PORT}`);
});
