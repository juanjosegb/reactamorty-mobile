import {ICharacter} from "@Types/character";

export const responseToCharacters = (response: any[]) => {
    var characters: ICharacter[] = [];
    response.forEach((character) => {
        characters.push({
            id: character.id,
            name: character.name,
            image: character.image,
            status: character.status,
            species: character.species,
            type: character.type,
            gender: character.gender,
            origin: character.origin,
            location: character.location,
            episode: character.episode,
            url: character.url,
            created: character.created,
        })
    });
    return characters;
};