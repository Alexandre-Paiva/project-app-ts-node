import * as http from "http";
import {getListEpisodes, getFilterEpisodes} from "./controllers/controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/htt-methodes";


export const app= async (
    req: http.IncomingMessage, 
    res: http.ServerResponse
) => {
    const [baseUrl, queryString] = req.url?.split("?") || ["", ""];

    if(req.method === HttpMethods.GET && baseUrl === Routes.LISTS) {
        await getListEpisodes(req, res);
}
    if(req.method === HttpMethods.GET && baseUrl === Routes.EPISODES) {
        await getFilterEpisodes(req, res);
    }
};
