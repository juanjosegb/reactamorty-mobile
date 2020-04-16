import React from 'react';
import {Container, Content, Text} from "native-base";
import {CustomHeader} from "../../components/Common/Header";

export type Props = { navigation: any }

const CharactersScreen = (props: Props) => {
    const {navigation} = props;
    return (
        <Container>
            <CustomHeader title={"Characters"} navigation={navigation}/>
            <Content padder>
                <Text>
                    Characters
                </Text>
            </Content>
        </Container>
    );
}

export default CharactersScreen;
