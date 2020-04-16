import React from 'react';
import {Body, Button, Header, Icon, Left, Title} from "native-base";

export type Props = { title: string, navigation: any }

export const CustomHeader = (props: Props) => {
    const {title, navigation} = props;
    return (
        <Header>
            <Left style={{flex: 2}}>
                <Button transparent>
                    <Icon name="menu" onPress={() => navigation.openDrawer()}/>
                </Button>
            </Left>
            <Body style={{flex: 3}}>
                <Title>{title}</Title>
            </Body>
        </Header>
    );
}
