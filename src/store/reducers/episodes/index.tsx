import {IEpisode} from "@Types/episode";

import {
    FETCH_EPISODES,
    FETCH_EPISODES_DONE,
    FETCH_EPISODES_ERROR,
    FETCH_FILTERED_EPISODES
} from "@Store/constants/episodes";

export interface IEpisodeState {
    episodes: IEpisode[],
    date: Date,
    isFetching: Boolean,
    isError: Boolean,
}

const initialState: IEpisodeState = {
    episodes: [],
    date: new Date("1999-01-01"),
    isFetching: false,
    isError: false,
};

export const episodesReducer = (state: IEpisodeState = initialState, action: any): IEpisodeState => {
    switch (action.type) {
        case FETCH_EPISODES:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_EPISODES_DONE:
            return {
                ...state,
                isFetching: false,
                episodes: action.payload,
                date: new Date(),
                isError: false
            };
        case FETCH_EPISODES_ERROR:
            return {
                ...state,
                isFetching: false,
                isError: true
            };
        case FETCH_FILTERED_EPISODES:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state
    }

};

export const getEpisodes = (state: IEpisodeState) => state.episodes;
export const getEpisodesDate = (state: IEpisodeState) => state.date;
export const getEpisodesFetching = (state: IEpisodeState) => state.isFetching;
export const getEpisodesError = (state: IEpisodeState) => state.isError;