export interface IEpisode {
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    id: number
}

export interface IFilterEpisode {
    name: string,
    episode: string
}

export interface IEpisodeWithTotalPages {
    results: IEpisode[],
    pages: number
}