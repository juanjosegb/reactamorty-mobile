import {ICriteria} from "@Types/filter";
import {IFilterEpisode} from "@Types/episode";

export const EpisodeCriteria: ICriteria[] = [
    {
        value: "Name",
        type: 'input',
        topic: 'name'
    },
    {
        value: "Episode",
        type: 'input',
        topic: 'episode'
    }
];

export const ValuesEpisodesCriteria = {name: '', episode: ''};

export const FilterEpisodeDefault: IFilterEpisode =
    {
        name: "",
        episode: ""
    };