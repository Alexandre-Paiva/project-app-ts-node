import fs from "fs";
import path from "path";
import { podcastModel } from "../models/podcast-model";



const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcastName?: string):Promise<podcastModel[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData);

    // Se apresentar parametro no repositoryPodcast json será filtrado
    if(podcastName) {
        jsonFile = jsonFile.filter(
            (podcast: podcastModel) => podcast.podcastName === podcastName
        );
    }
    return jsonFile;
};
