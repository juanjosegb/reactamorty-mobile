import React, {useEffect} from 'react';
import {Body, Button, Container, Left, ListItem, Right, Thumbnail} from "native-base";
import {CustomHeader} from "@Components/Common/Header";
import {fetchCharacters} from "@Store/actions/characters";
import {getCharacters, ICharacterState} from "@Store/reducers/characters";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@Store/reducers";
import {LinearGradient} from "expo-linear-gradient";
import {CustomTitle} from "@Custom/Text";
import {FlatList, SafeAreaView, Text, View} from "react-native";

export type Props = { navigation: any }

const CharactersScreen = (props: Props) => {
    const {navigation} = props;
    const dispatch = useDispatch();
    const charactersState: ICharacterState = useSelector((state: RootState) => state.charactersState);

    useEffect(() => {
        console.log(charactersState.characters.length);
        dispatch(fetchCharacters(charactersState));
    }, []);

    return (
        <Container>
            <LinearGradient
                colors={["#87BFCF", "#7dd333"]}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    height: 800,
                }}
            />
            <CustomHeader title={"Characters"} navigation={navigation}/>
            <CustomTitle>Characters</CustomTitle>
            <SafeAreaView style={{padding: 10, flex: 1, paddingTop: 10}}>
                <FlatList style={{backgroundColor: "#EFEEEE", borderRadius: 4}}
                          data={getCharacters(charactersState)}
                          keyExtractor={(item, index) => index.toString()}
                          onEndReachedThreshold={0}
                          renderItem={({item, index, separators}) => (
                              <ListItem thumbnail key={index}>
                                  <Left>
                                      <Thumbnail square source={{uri: item.image}}/>
                                  </Left>
                                  <Body>
                                      <Text>{item.name}</Text>
                                      <Text
                                          style={{color: 'grey'}}>{item.gender} | {item.species} | {item.status}</Text>
                                  </Body>
                                  <Right>
                                      <Button transparent>
                                          <Text>Detail</Text>
                                      </Button>
                                  </Right>
                              </ListItem>
                          )}
                >
                </FlatList>
            </SafeAreaView>
        </Container>
    );
}

export default CharactersScreen;
