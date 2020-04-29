export interface ILocation {
    name: string,
    type: string,
    dimension: string,
    residents: string[],
    id: number
}


export interface IFilterLocation {
    name: string,
    type: string,
    dimension: string
}

export interface ILocationWithTotalPages {
    results: ILocation[],
    pages: number
}