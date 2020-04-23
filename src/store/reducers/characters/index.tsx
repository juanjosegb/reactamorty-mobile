import {ICharacter} from "@Types/character";
import {
    FETCH_CHARACTERS,
    FETCH_CHARACTERS_CACHE,
    FETCH_CHARACTERS_DONE,
    FETCH_CHARACTERS_ERROR,
    FETCH_FILTERED_CHARACTERS
} from "@Store/constants/characters";

export interface ICharacterState {
    characters: ICharacter[],
    date: Date,
    isFetching: Boolean,
    isError: Boolean,
}

const initialState: ICharacterState = {
    characters: [],
    date: new Date("1999-01-01"),
    isFetching: false,
    isError: false,
};

export const charactersReducer = (state: ICharacterState = initialState, action: any): ICharacterState => {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_CHARACTERS_DONE:
            return {
                ...state,
                isFetching: false,
                characters: action.payload,
                date: new Date(),
                isError: false
            };

        case FETCH_CHARACTERS_CACHE:
            return {
                ...state,
                isFetching: false,
                characters: action.payload,
                isError: false
            };
        case FETCH_CHARACTERS_ERROR:
            return {
                ...state,
                isFetching: false,
                isError: true
            };
        case FETCH_FILTERED_CHARACTERS:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state
    }

};

export const getCharacters = (state: ICharacterState) => state.characters;
export const getCharactersDate = (state: ICharacterState) => state.date;
export const getCharactersFetching = (state: ICharacterState) => state.isFetching;
export const getCharactersError = (state: ICharacterState) => state.isError;