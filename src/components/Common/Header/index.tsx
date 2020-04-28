import React from 'react';
import {Body, Button, Header, Left, Right} from "native-base";
import HeaderTitle from "@Custom/HeaderTitle";

export type Props = { title: string, navigation: any, children: any }

export const CustomHeader = (props: Props) => {
    const {title, children} = props;
    return (
        <Header style={{backgroundColor: '#38B1C8'}}>
            <Left style={{flex: 1}}>
                <Button transparent>
                    {children}
                </Button>
            </Left>
            <Body style={{flex: 1, alignItems:'center'}}>
                <HeaderTitle>{title}</HeaderTitle>
            </Body>
            <Right style={{flex: 1}}/>
        </Header>
    );
}
