import React from 'react';
import {Container, Content, Icon} from "native-base";
import {CustomHeader} from "@Components/Common/Header";
import {CustomGradient} from "@Custom/Gradient";
import {CustomDividerScreenBottom, CustomDividerScreenTop} from "@Custom/Divider";
import {Avatar} from "react-native-elements";
import {CustomTitle, ProfileText} from "@Custom/Text";

export type Props = { route: any, navigation: any }

const DetailScreen = (props: Props) => {
    const {navigation, route} = props;
    const {character} = route.params;
    return (
        <Container>
            <CustomGradient colors={["#87BFCF", "#7dd333"]}/>
            <CustomHeader title={"Characters"} navigation={navigation}>
                <Icon style={{fontSize: 30}} name="arrow-left" type={"Feather"} onPress={() => navigation.goBack()}/>
            </CustomHeader>
            <CustomDividerScreenTop/>
            <Content padder contentContainerStyle={{
                flex: 1,
                alignItems: 'center',
                paddingTop: 50
            }}>
                <Avatar size={200} rounded source={{uri: character.image}}/>
                <CustomTitle>{character.name}</CustomTitle>
                <ProfileText>Status: {character.status}</ProfileText>
                <ProfileText>Species: {character.species}</ProfileText>
                {character.type !== "" && <ProfileText>Type: {character.type}</ProfileText>}
                <ProfileText>Gender: {character.gender}</ProfileText>
                <ProfileText>Origin: {character.origin.name}</ProfileText>
                <ProfileText>Location: {character.location.name}</ProfileText>
            </Content>
            <CustomDividerScreenBottom/>
        </Container>
    );
}

export default DetailScreen;
