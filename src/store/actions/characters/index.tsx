import {ICharacter, ICharacterWithTotalPages, IFilterCharacter} from "@Types/character";

import {
    FETCH_ALL_CHARACTERS,
    FETCH_ALL_CHARACTERS_DONE,
    FETCH_CHARACTERS,
    FETCH_CHARACTERS_DONE,
    FETCH_CHARACTERS_ERROR,
    FETCH_CHARACTERS_START,
    FETCH_FILTERED_CHARACTERS
} from "@Store/constants/characters";

import {IReduxAction} from "..";

export const fetchCharactersStart = (): IReduxAction => {
    return {type: FETCH_CHARACTERS_START};
};

export const fetchCharacters = (page: number = 1): IReduxAction => {
    return {
        type: FETCH_CHARACTERS,
        payload: page
    };
};

export const fetchAllCharacters = (): IReduxAction => {
    return {type: FETCH_ALL_CHARACTERS};
};

export const fetchAllCharactersDone = (characters: ICharacter[]): IReduxAction => {
    return {type: FETCH_ALL_CHARACTERS_DONE, payload: characters};
};

export const fetchCharactersDone = (characters: ICharacterWithTotalPages): IReduxAction => {
    return {type: FETCH_CHARACTERS_DONE, payload: characters};
};

export const fetchCharactersError = (): IReduxAction => {
    return {type: FETCH_CHARACTERS_ERROR};
};

export const fetchFilteredCharacters = (filter: IFilterCharacter): IReduxAction => {
    return {
        type: FETCH_FILTERED_CHARACTERS,
        payload: filter
    };
};