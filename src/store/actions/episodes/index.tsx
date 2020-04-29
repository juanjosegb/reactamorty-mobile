import {IEpisodeWithTotalPages, IFilterEpisode} from "@Types/episode";

import {
    FETCH_EPISODES,
    FETCH_EPISODES_DONE,
    FETCH_EPISODES_ERROR,
    FETCH_EPISODES_START,
    FETCH_FILTERED_EPISODES
} from "@Store/constants/episodes";

import {IReduxAction} from "..";

export const fetchEpisodesStart = (): IReduxAction => {
    return {type: FETCH_EPISODES_START};
};

export const fetchEpisodes = (page: number): IReduxAction => {
    return {
        type: FETCH_EPISODES,
        payload: page
    };
};

export const fetchEpisodesDone = (episodes: IEpisodeWithTotalPages): IReduxAction => {
    return {type: FETCH_EPISODES_DONE, payload: episodes};
};

export const fetchEpisodesError = (): IReduxAction => {
    return {type: FETCH_EPISODES_ERROR};
};

export const fetchFilteredEpisodes = (filter: IFilterEpisode): IReduxAction => {
    return {
        type: FETCH_FILTERED_EPISODES,
        payload: filter
    };
};