import React from 'react';
import {Body, Button, Header, Icon, Left, Right, Title} from "native-base";

export type Props = { title: string, navigation: any }

export const CustomHeader = (props: Props) => {
    const {title, navigation} = props;
    return (
        <Header>
            <Left style={{flex: 2}}/>
            <Body style={{flex: 2}}>
                <Title>{title}</Title>
            </Body>
            <Right style={{flex: 1}}>
                <Button transparent>
                    <Icon name="menu" onPress={() => navigation.openDrawer()}/>
                </Button>
            </Right>
        </Header>
    );
}
