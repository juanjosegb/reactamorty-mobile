import React from 'react';
import {Container, Content, Text} from "native-base";
import {CustomHeader} from "@Components/Common/Header";

export type Props = { navigation: any }

const LocationsScreen = (props: Props) => {
    const {navigation} = props;
    return (
        <Container>
            <CustomHeader title={"Locations"} navigation={navigation}/>
            <Content padder>
                <Text>
                    Locations
                </Text>
            </Content>
        </Container>
    );
}

export default LocationsScreen;
