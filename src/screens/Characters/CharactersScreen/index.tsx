import React, {useEffect, useState} from 'react';
import {Body, Button, Container, Left, ListItem, Right, Thumbnail} from "native-base";
import {CustomHeader} from "@Components/Common/Header";
import {fetchFilteredCharacters} from "@Store/actions/characters";
import {getCharactersFetching, getCurrentCharacters, getCurrentPage, ICharacterState} from "@Store/reducers/characters";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@Store/reducers";
import {LinearGradient} from "expo-linear-gradient";
import {CustomTitle} from "@Custom/Text";
import {ActivityIndicator, FlatList, SafeAreaView, Text} from "react-native";
import {FilterCharacterDefault} from "@Constants/characters";
import {ICharacter, IFilterCharacter} from "@Types/character";
import {persistor} from "@Store/index";

export type Props = { navigation: any }

const CharactersScreen = (props: Props) => {
    const {navigation} = props;
    const dispatch = useDispatch();
    const charactersState: ICharacterState = useSelector((state: RootState) => state.charactersState);
    const [filteredCharacters, setFilteredCharacters] = useState<ICharacter[]>([]);
    const [filteredValues, setFilteredValues] = useState<IFilterCharacter>(FilterCharacterDefault);

    useEffect(() => {
        if (!getCharactersFetching(charactersState) && charactersState.page === 1) {
            filteredValues.page = 1;
            setFilteredValues(filteredValues);
            dispatch(fetchFilteredCharacters(filteredValues));
        }
    }, []);

    useEffect(() => {
        setFilteredCharacters(filteredCharacters.concat(getCurrentCharacters(charactersState)));
    }, [getCurrentCharacters(charactersState)]);

    function onLoadMore() {
        if (!getCharactersFetching(charactersState)) {
            filteredValues.page = getCurrentPage(charactersState) + 1;
            setFilteredValues(filteredValues);
            dispatch(fetchFilteredCharacters(filteredValues));
        }
    }

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
            <SafeAreaView style={{padding: 10, flex: 1, paddingTop: 10, zIndex: 1}}>
                <FlatList style={{backgroundColor: "#EFEEEE", borderRadius: 4}}
                          data={filteredCharacters}
                          keyExtractor={(item, index) => index.toString()}
                          onEndReached={onLoadMore}
                          onEndReachedThreshold={0.01}
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
            {getCharactersFetching(charactersState) && <SafeAreaView style={{
                position: "absolute",
                padding: 10,
                flex: 1,
                paddingTop: 10,
                height: "100%",
                width: "100%"
            }}>
                <ActivityIndicator size={60} color="#7E4896" style={{
                    zIndex: 3,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
            </SafeAreaView>}
        </Container>
    );
}

export default CharactersScreen;
