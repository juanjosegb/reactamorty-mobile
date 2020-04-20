import React from 'react';
import {Container, Content, Text} from "native-base";
import {CustomHeader} from "@Components/Common/Header";

export type Props = { navigation: any }

const ComparerScreen = (props: Props) => {
    const {navigation} = props;
    return (
        <Container>
            <CustomHeader title={"Comparer"} navigation={navigation}/>
            <Content padder>
                <Text>
                    Comparer
                </Text>
            </Content>
        </Container>
    );
}

export default ComparerScreen;
