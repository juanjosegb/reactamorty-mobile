import React from 'react';
import {Container, Content, Text} from "native-base";
import {CustomHeader} from "@Components/Common/Header";

export type Props = { navigation: any }

const HomeScreen = (props: Props) => {
    const {navigation} = props;
    return (
        <Container>
            <CustomHeader title={"Home"} navigation={navigation}/>
            <Content padder>
                <Text>
                    Home
                </Text>
            </Content>
        </Container>
    );
}

export default HomeScreen;
