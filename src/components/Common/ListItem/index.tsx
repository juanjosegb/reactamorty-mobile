import React from 'react';
import {Body, Button, Left, ListItem, Thumbnail} from "native-base";
import {Text} from "react-native";
import {SubTitleText} from "@Custom/Text";
import {ICharacter} from "@Types/character";
import {ArrowRight} from "@Custom/Icon";
import {CustomRight} from "@Custom/Right";

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
        <CustomRight>
            <Button transparent>
                <ArrowRight type={"Feather"} name={"chevron-right"}/>
            </Button>
        </CustomRight>
    </ListItem>
}
