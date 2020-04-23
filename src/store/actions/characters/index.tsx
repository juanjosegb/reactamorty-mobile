import {ICharacter, IFilterCharacter} from "@Types/character";

import {
    FETCH_CHARACTERS,
    FETCH_CHARACTERS_CACHE,
    FETCH_CHARACTERS_DONE,
    FETCH_CHARACTERS_ERROR,
    FETCH_FILTERED_CHARACTERS
} from "@Store/constants/characters";

import {IReduxAction} from "..";
import {ICharacterState} from "@Store/reducers/characters";

export const fetchCharacters = (state: ICharacterState): IReduxAction => {
    return {
        type: FETCH_CHARACTERS,
        payload: state
    };
};

export const fetchCharactersDone = (characters: ICharacter[]): IReduxAction => {
    return {type: FETCH_CHARACTERS_DONE, payload: characters};
};

export const fetchCharactersCache = (characters: ICharacter[]): IReduxAction => {
    return {
        type: FETCH_CHARACTERS_CACHE,
        payload: characters
    }
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