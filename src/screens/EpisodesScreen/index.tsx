import React from 'react';
import {Container, Content, Icon, Text} from "native-base";
import {CustomHeader} from "@Components/Common/Header";

export type Props = { navigation: any }

const EpisodesScreen = (props: Props) => {
    const {navigation} = props;
    return (
        <Container>
            <CustomHeader title={"Episodes"} navigation={navigation}>
                <Icon style={{fontSize: 30}} name="menu" onPress={() => navigation.openDrawer()}/>
            </CustomHeader>
            <Content padder>
                <Text>
                    Episodes
                </Text>
            </Content>
        </Container>
    );
}

export default EpisodesScreen;
