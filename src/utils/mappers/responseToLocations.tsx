import {ILocation} from "@Types/location";

export const responseToLocations = (response: any[]) => {
    var locations: ILocation[] = [];
    response.forEach((location) => {
        locations.push({
            name: location.name,
            type: location.type,
            dimension: location.dimension,
            id: location.id
        })
    });
    return locations;
};