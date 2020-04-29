import {Body, ListItem, Right} from "native-base";
import {Text} from "react-native";
import {SubTitleText} from "@Custom/Text";
import React from "react";
import {ILocation} from "@Types/location";

export type Props = { index: number, item: ILocation, navigation: any }

export const LocationListItem = (props: Props) => {
    const {index, item, navigation} = props;
    return <ListItem thumbnail key={index}>
        <Body>
            <Text numberOfLines={1} style={{ width: 225 }}>{item.name}</Text>
            <SubTitleText>{item.type}  |  {item.dimension}</SubTitleText>
        </Body>
        <Right>
            <SubTitleText>{item.residents.length} Residents</SubTitleText>
        </Right>
    </ListItem>
};
