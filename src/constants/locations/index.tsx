import {ICriteria} from "@Types/filter";
import {IFilterLocation} from "@Types/location";

export const LocationCriteria: ICriteria[] = [
    {
        value: "Name",
        type: 'input',
        topic: 'name'
    },
    {
        value: "Type",
        type: 'input',
        topic: 'type'
    },
    {
        value: "Dimension",
        type: 'input',
        topic: 'dimension'
    }
];

export const ValuesLocationsCriteria = {name: '', type: '', dimension: ''};

export const FilterLocationDefault: IFilterLocation =
    {
        name: "",
        type: "",
        dimension: ""
    };