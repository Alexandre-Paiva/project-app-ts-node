import {repositoryPodcast} from "../repositories/podcast-repository";



export const serviceListEpisodes = async () => {
    const data = repositoryPodcast();
    return data;
};