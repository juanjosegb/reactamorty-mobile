import {IEpisode, IFilterEpisode} from "@Types/episode";

import {
    FETCH_EPISODES,
    FETCH_EPISODES_CACHE,
    FETCH_EPISODES_DONE,
    FETCH_EPISODES_ERROR,
    FETCH_FILTERED_EPISODES
} from "@Store/constants/episodes";
import {IEpisodeState} from "@Store/reducers/episodes";

import {IReduxAction} from "..";

export const fetchEpisodes = (state: IEpisodeState): IReduxAction => {
    return {
        type: FETCH_EPISODES,
        payload: state
    };
};

export const fetchEpisodesDone = (episodes: IEpisode[]): IReduxAction => {
    return {type: FETCH_EPISODES_DONE, payload: episodes};
};

export const fetchEpisodesCache = (episodes: IEpisode[]): IReduxAction => {
    return {
        type: FETCH_EPISODES_CACHE,
        payload: episodes
    }
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