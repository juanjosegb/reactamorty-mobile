import {
    ADD_CHARACTERS_HISTORY,
    ADD_EPISODES_HISTORY,
    ADD_LOCATIONS_HISTORY,
    CLEAN_HISTORY
} from "@Store/constants/actions"
import {checkCanAddToHistory} from "@Utils/history";
import {ifElse} from "ramda";

export interface IHistoryState {
    charactersHistory: string[],
    locationsHistory: string[],
    episodesHistory: string[],
}

const initialState: IHistoryState = {
    charactersHistory: [],
    locationsHistory: [],
    episodesHistory: [],
};

export const historyReducer = (state: IHistoryState = initialState, action: any): IHistoryState => {

    const addHistory = ifElse((state: string[], action: any) => checkCanAddToHistory(state, action), (state: string[], action: any) => [action.payload, ...state], (state: string[]) => state);

    switch (action.type) {
        case ADD_CHARACTERS_HISTORY:
            return {
                ...state,
                charactersHistory: addHistory(state.charactersHistory, action)
            };

        case ADD_EPISODES_HISTORY:
            return {
                ...state,
                episodesHistory: addHistory(state.episodesHistory, action)
            };

        case ADD_LOCATIONS_HISTORY:
            return {
                ...state,
                locationsHistory: addHistory(state.locationsHistory, action)
            };

        case CLEAN_HISTORY:
            return initialState;

        default:
            return state;
    }

};

export const getCharactersHistory = (state: IHistoryState) => state.charactersHistory;
export const getLocationsHistory = (state: IHistoryState) => state.locationsHistory;
export const getEpisodesHistory = (state: IHistoryState) => state.episodesHistory;