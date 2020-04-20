import React from 'react';
import {Container, Content, Text} from "native-base";
import {CustomHeader} from "@Components/Common/Header";

export type Props = { navigation: any }

const EpisodesScreen = (props: Props) => {
    const {navigation} = props;
    return (
        <Container>
            <CustomHeader title={"Episodes"} navigation={navigation}/>
            <Content padder>
                <Text>
                    Episodes
                </Text>
            </Content>
        </Container>
    );
}

export default EpisodesScreen;
