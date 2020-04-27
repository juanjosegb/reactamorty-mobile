import React from 'react';
import {Body, Button, Left, ListItem, Right, Thumbnail} from "native-base";
import {Text} from "react-native";
import {SubTitleText} from "@Custom/Text";
import {ICharacter} from "@Types/character";

export type Props = { index: number, item: ICharacter }

export const CharacterListItem = (props: Props) => {
    const {index, item} = props;
    return <ListItem thumbnail key={index}>
        <Left>
            <Thumbnail square source={{uri: item.image}}/>
        </Left>
        <Body>
            <Text>{item.name}</Text>
            <SubTitleText>{item.gender} | {item.species} | {item.status}</SubTitleText>
        </Body>
        <Right>
            <Button transparent>
                <Text>Detail</Text>
            </Button>
        </Right>
    </ListItem>
}
