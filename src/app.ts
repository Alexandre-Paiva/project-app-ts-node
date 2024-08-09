import * as http from "http";
import {getListEpisodes, getFilterEpisodes} from "./controllers/controller";
import { Routes } from "./routes/routes";


export const app= async (
    req: http.IncomingMessage, 
    res: http.ServerResponse
) => {
    const [baseUrl, queryString] = req.url?.split("?") || ["", ""];

    if(req.method === "GET" && baseUrl === Routes.LISTS) {
        await getListEpisodes(req, res);
}
    if(req.method === "GET" && baseUrl === Routes.EPISODES) {
        await getFilterEpisodes(req, res);
    }
};
