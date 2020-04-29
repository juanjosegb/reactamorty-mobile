import {ILocation} from "@Types/location";

import {
    FETCH_FILTERED_LOCATIONS,
    FETCH_LOCATIONS,
    FETCH_LOCATIONS_DONE,
    FETCH_LOCATIONS_ERROR,
    FETCH_LOCATIONS_START
} from "@Store/constants/locations";

export interface ILocationState {
    locations: ILocation[],
    page: number,
    isFetching: boolean,
    isError: boolean,
    totalPages: number
}

const initialState: ILocationState = {
    locations: [],
    page: 1,
    isFetching: false,
    isError: false,
    totalPages: 0
};

export const locationsReducer = (state: ILocationState = initialState, action: any): ILocationState => {
    switch (action.type) {
        case FETCH_LOCATIONS_START:
            return {
                ...state,
                locations: []
            };
        case FETCH_LOCATIONS:
            return {
                ...state,
                page: action.payload,
                isFetching: true,
                totalPages: 0
            };
        case FETCH_LOCATIONS_DONE:
            return {
                ...state,
                isFetching: false,
                locations: [...state.locations, ...action.payload.results],
                totalPages: action.payload.pages
            };
        case FETCH_LOCATIONS_ERROR:
            return {
                ...state,
                page: 0,
                locations: [],
                isFetching: false,
                isError: true,
                totalPages: 0
            };
        case FETCH_FILTERED_LOCATIONS:
            return {
                ...state,
                page: action.payload.page,
                isFetching: true,
                locations: [],
                totalPages: 0
            };
        default:
            return state
    }

};

export const getCurrentLocations = (state: ILocationState) => state.locations;
export const getCurrentPage = (state: ILocationState) => state.page;
export const getTotalPages = (state: ILocationState) => state.totalPages;
export const getLocationsFetching = (state: ILocationState) => state.isFetching;
export const getLocationsError = (state: ILocationState) => state.isError;