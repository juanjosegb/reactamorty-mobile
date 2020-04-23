import {
    ADD_CHARACTERS_HISTORY,
    ADD_EPISODES_HISTORY,
    ADD_LOCATIONS_HISTORY,
    CLEAN_HISTORY
} from "@Store/constants/actions";

import {IReduxAction} from "..";

export const addCharacterHistory = (id: string, name: string): IReduxAction => {
    return {type: ADD_CHARACTERS_HISTORY, payload: {id: id, name: name}};
};

export const addLocationHistory = (id: string, name: string): IReduxAction => {
    return {type: ADD_LOCATIONS_HISTORY, payload: {id: id, name: name}};
};

export const addEpisodeHistory = (id: string, name: string): IReduxAction => {
    return {type: ADD_EPISODES_HISTORY, payload: {id: id, name: name}};
};

export const cleanHistory = (): IReduxAction => {
    return {type: CLEAN_HISTORY};
};