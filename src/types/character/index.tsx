export interface ICharacter {
    id: number,
    name: string,
    image: string,
    status: string,
    species: string[],
    type: string[]
    gender: string,
    origin: any,
    location: any,
    episode: string[],
    url: string,
    created: string
}

export interface IFilterCharacter {
    page: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string
}

export interface ICharacterWithTotalPages {
    results: ICharacter[],
    pages: number
}