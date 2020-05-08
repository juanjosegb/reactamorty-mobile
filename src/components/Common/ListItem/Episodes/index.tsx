import {Body, ListItem, Right} from "native-base";
import {Text} from "react-native";
import {SubTitleText} from "@Custom/Text";
import React from "react";
import {IEpisode} from "@Types/episode";

export type Props = { index: number, item: IEpisode, navigation: any }

export const EpisodeListItem = (props: Props) => {
    const {index, item, navigation} = props;
    return <ListItem thumbnail key={index}>
        <Body>
            <Text numberOfLines={1} style={{ width: 190 }}>{item.name}</Text>
            <SubTitleText>{item.episode}  |  {item.air_date}</SubTitleText>
        </Body>
        <Right>
            <SubTitleText>{item.characters.length} Characters</SubTitleText>
        </Right>
    </ListItem>
};
