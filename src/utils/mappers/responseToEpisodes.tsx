import {IEpisode} from "@Types/episode";

export const responseToEpisodes = (response: any[]) => {
    var episodes: IEpisode[] = [];
    response.forEach((episode) => {
        episodes.push({
            name: episode.name,
            air_date: episode.air_date,
            episode: episode.episode,
            id: episode.id
        })
    });
    return episodes;
};