import React from 'react';
import {Body, Button, Header, Icon, Left} from "native-base";
import HeaderTitle from "@Custom/HeaderTitle";

export type Props = { title: string, navigation: any }

export const CustomHeader = (props: Props) => {
    const {title, navigation} = props;
    return (
        <Header style={{backgroundColor: '#38B1C8'}}>
            <Left style={{flex: 2}}>
                <Button transparent>
                    <Icon style={{fontSize: 30}} name="menu" onPress={() => navigation.openDrawer()}/>
                </Button>
            </Left>
            <Body style={{flex: 3}}>
                <HeaderTitle>{title}</HeaderTitle>
            </Body>
        </Header>
    );
}
