import React from 'react';
import {Container, Content, Icon, Text} from "native-base";
import {CustomHeader} from "@Components/Common/Header";

export type Props = { navigation: any }

const ComparerScreen = (props: Props) => {
    const {navigation} = props;
    return (
        <Container>
            <CustomHeader title={"Comparer"} navigation={navigation}>
                <Icon style={{fontSize: 30}} name="menu" onPress={() => navigation.openDrawer()}/>
            </CustomHeader>
            <Content padder>
                <Text>
                    Comparer
                </Text>
            </Content>
        </Container>
    );
}

export default ComparerScreen;
