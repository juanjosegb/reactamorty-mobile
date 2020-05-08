import React, {useEffect, useState} from 'react';
import {Container, Content, Icon} from "native-base";
import {CustomHeader} from "@Components/Common/Header";
import {Divider, SearchBar} from "react-native-elements";
import {FlatList, Text} from "react-native";
import {getCurrentCharacters, ICharacterState} from "@Store/reducers/characters";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@Store/reducers";
import {fetchFilteredCharacters} from "@Store/actions/characters";
import {FilterCharacterDefault} from "@Constants/characters";
import {IFilterCharacter} from "@Types/character";

export type Props = { navigation: any }

const ComparerScreen = (props: Props) => {
    const {navigation} = props;
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const charactersState: ICharacterState = useSelector((state: RootState) => state.charactersState);
    const [filteredValues, setFilteredValues] = useState<IFilterCharacter>(FilterCharacterDefault);
    const characters = getCurrentCharacters(charactersState);

    useEffect(() => {
        filteredValues.page = 0;
        dispatch(fetchFilteredCharacters(filteredValues));
    }, []);

    function handleChange(text: string) {
        if (text.length > 3) {
            filteredValues.name = text;
            dispatch(fetchFilteredCharacters(filteredValues));
        }
        setSearch(text);
    }

    return (
        <Container>
            <CustomHeader title={"Comparer"} navigation={navigation}>
                <Icon style={{fontSize: 30}} name="menu" onPress={() => navigation.openDrawer()}/>
            </CustomHeader>
            <Content padder>
                <SearchBar
                    round
                    searchIcon={{name: "home", size: 24}}
                    onChangeText={(text: string) => handleChange(text)}
                    onClear={() => handleChange('')}
                    placeholder="Find characters"
                    value={search}
                />
                <FlatList
                    data={characters}
                    ItemSeparatorComponent={Divider}
                    renderItem={({item}) => (
                        <Text>{item.name}</Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Content>
        </Container>
    );
}

export default ComparerScreen;
