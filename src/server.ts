import * as http from "http";
import {app} from "./app";

// criar o Server 
const server = http.createServer(app);
    
const port = process.env.PORT;


server.listen(port, ()=> {
    let date = new Date();
    console.log(`Servidor iniciado na porta ${port} \n` + date);
});