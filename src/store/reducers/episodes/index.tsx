import {IEpisode} from "@Types/episode";

import {
    FETCH_EPISODES,
    FETCH_EPISODES_DONE,
    FETCH_EPISODES_ERROR,
    FETCH_EPISODES_START,
    FETCH_FILTERED_EPISODES
} from "@Store/constants/episodes";

export interface IEpisodeState {
    episodes: IEpisode[],
    page: number,
    isFetching: boolean,
    isError: boolean,
    totalPages: number
}

const initialState: IEpisodeState = {
    episodes: [],
    page: 1,
    isFetching: false,
    isError: false,
    totalPages: 0
};

export const episodesReducer = (state: IEpisodeState = initialState, action: any): IEpisodeState => {
    switch (action.type) {
        case FETCH_EPISODES_START:
            return {
                ...state,
                episodes: []
            };
        case FETCH_EPISODES:
            return {
                ...state,
                page: action.payload,
                isFetching: true,
                totalPages: 0
            };
        case FETCH_EPISODES_DONE:
            return {
                ...state,
                isFetching: false,
                episodes: [...state.episodes, ...action.payload.results],
                totalPages: action.payload.pages
            };
        case FETCH_EPISODES_ERROR:
            return {
                ...state,
                page: 0,
                episodes: [],
                isFetching: false,
                isError: true,
                totalPages: 0
            };
        case FETCH_FILTERED_EPISODES:
            return {
                ...state,
                page: action.payload.page,
                isFetching: true,
                episodes: [],
                totalPages: 0
            };
        default:
            return state
    }

};

export const getCurrentEpisodes = (state: IEpisodeState) => state.episodes;
export const getCurrentPage = (state: IEpisodeState) => state.page;
export const getTotalPages = (state: IEpisodeState) => state.totalPages;
export const getEpisodesFetching = (state: IEpisodeState) => state.isFetching;
export const getEpisodesError = (state: IEpisodeState) => state.isError;