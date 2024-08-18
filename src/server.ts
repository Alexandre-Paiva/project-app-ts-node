import * as http from "http";
import {app} from "./app";
const port = process.env.PORT;
// criar o Server 
const server = http.createServer(app);

server.listen(port, ()=> {
    let date = new Date();
    console.log(`Servidor iniciado na porta ${port} \n` + date);
});