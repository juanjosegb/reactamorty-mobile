import {ICriteria} from "@Types/filter";
import {GenderOptions} from "@Constants/GenderOptions";
import {StatusOptions} from "@Constants/StatusOptions";
import {IFilterCharacter} from "@Types/character";

export const CharacterCriteria: ICriteria[] = [
    {
        value: GenderOptions,
        type: 'select',
        topic: 'gender'
    },
    {
        value: StatusOptions,
        type: 'select',
        topic: 'status'
    },
    {
        value: "Name",
        type: 'input',
        topic: 'name'
    },
    {
        value: "Species",
        type: 'input',
        topic: 'species'
    },
    {
        value: "Type",
        type: 'input',
        topic: 'type'
    },
    {
        value: "Origin",
        type: 'input',
        topic: 'origin'
    }
];

export const ValuesCharactersCriteria = {name: '', status: '', species: '', type: '', gender: '', origin: ''};

export const FilterCharacterDefault: IFilterCharacter =
    {
        page: 1,
        name: "",
        status: "",
        species: "",
        type: "",
        gender: ""
    };