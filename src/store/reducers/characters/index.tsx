import {ICharacter} from "@Types/character";

import {IReduxAction} from "@Store/actions";
import {
    FETCH_ALL_CHARACTERS,
    FETCH_ALL_CHARACTERS_DONE,
    FETCH_CHARACTERS,
    FETCH_CHARACTERS_DONE,
    FETCH_CHARACTERS_ERROR,
    FETCH_CHARACTERS_START,
    FETCH_FILTERED_CHARACTERS
} from "@Store/constants/characters";

export interface ICharacterState {
    currentCharacters: ICharacter[],
    page: number,
    isFetching: boolean,
    isError: boolean,
    totalPages: number
}

const initialState: ICharacterState = {
    currentCharacters: [],
    page: 1,
    isFetching: false,
    isError: false,
    totalPages: 0
};

export const charactersReducer = (state: ICharacterState = initialState, action: IReduxAction): ICharacterState => {
    switch (action.type) {
        case FETCH_CHARACTERS_START:
            return {
                ...state,
                currentCharacters: []
            };
        case FETCH_CHARACTERS:
            return {
                ...state,
                page: action.payload,
                isFetching: true,
                totalPages: 0
            };
        case FETCH_CHARACTERS_DONE:
            return {
                ...state,
                isFetching: false,
                currentCharacters: [...state.currentCharacters, ...action.payload.results],
                totalPages: action.payload.pages
            };
        case FETCH_CHARACTERS_ERROR:
            return {
                ...state,
                page: 0,
                currentCharacters: [],
                isFetching: false,
                isError: true,
                totalPages: 0
            };
        case FETCH_FILTERED_CHARACTERS:
            return {
                ...state,
                page: action.payload.page,
                isFetching: true,
                currentCharacters: [],
                totalPages: 0
            };
        case FETCH_ALL_CHARACTERS:
            return {
                ...state,
                isFetching: true,
                currentCharacters: []
            };
        case FETCH_ALL_CHARACTERS_DONE:
            return {
                ...state,
                isFetching: false,
                currentCharacters: action.payload
            };
        default:
            return state;

    }

};

export const getCurrentCharacters = (state: ICharacterState) => state.currentCharacters;
export const getCurrentPage = (state: ICharacterState) => state.page;
export const getTotalPages = (state: ICharacterState) => state.totalPages;
export const getCharactersFetching = (state: ICharacterState) => state.isFetching;
export const getCharactersError = (state: ICharacterState) => state.isError;