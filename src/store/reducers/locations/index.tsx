import {ILocation} from "@Types/location";

import {
    FETCH_FILTERED_LOCATIONS,
    FETCH_LOCATIONS,
    FETCH_LOCATIONS_CACHE,
    FETCH_LOCATIONS_DONE,
    FETCH_LOCATIONS_ERROR
} from "@Store/constants/locations";

export interface ILocationState {
    locations: ILocation[],
    date: Date,
    isFetching: Boolean,
    isError: Boolean,
}

const initialState: ILocationState = {
    locations: [],
    date: new Date("1999-01-01"),
    isFetching: false,
    isError: false,
};

export const locationsReducer = (state: ILocationState = initialState, action: any): ILocationState => {
    switch (action.type) {
        case FETCH_LOCATIONS:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_LOCATIONS_DONE:
            return {
                ...state,
                isFetching: false,
                locations: action.payload,
                date: new Date(),
                isError: false
            };
        case FETCH_LOCATIONS_CACHE:
            return {
                ...state,
                isFetching: false,
                locations: action.payload,
                isError: false
            };
        case FETCH_LOCATIONS_ERROR:
            return {
                ...state,
                isFetching: false,
                isError: true
            };
        case FETCH_FILTERED_LOCATIONS:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state
    }

};

export const getLocations = (state: ILocationState) => state.locations;
export const getLocationsDate = (state: ILocationState) => state.date;
export const getLocationsFetching = (state: ILocationState) => state.isFetching;
export const getLocationsError = (state: ILocationState) => state.isError;