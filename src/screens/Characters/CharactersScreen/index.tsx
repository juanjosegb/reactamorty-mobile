import React, {useEffect} from 'react';
import {Container} from "native-base";
import {CustomHeader} from "@Components/Common/Header";
import {fetchCharacters, fetchCharactersStart} from "@Store/actions/characters";
import {
    getCharactersFetching,
    getCurrentCharacters,
    getCurrentPage,
    getTotalPages,
    ICharacterState
} from "@Store/reducers/characters";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@Store/reducers";
import {CustomTitle} from "@Custom/Text";
import {FlatListView, SpinnerView} from "@Custom/View";
import {CustomSpinner} from "@Custom/Spinner";
import {CustomGradient} from "@Custom/Gradient";
import {CustomFlatList} from "@Custom/FlatList";
import {CharacterListItem} from "@Components/Common/ListItem";

export type Props = { navigation: any }

const CharactersScreen = (props: Props) => {
    const {navigation} = props;
    const dispatch = useDispatch();
    const charactersState: ICharacterState = useSelector((state: RootState) => state.charactersState);
    const currentCharacters = getCurrentCharacters(charactersState);
    const isFetching = getCharactersFetching(charactersState);
    const currentPage = getCurrentPage(charactersState);
    const totalPages = getTotalPages(charactersState);

    useEffect(() => {
        dispatch(fetchCharactersStart());
        dispatch(fetchCharacters(1));
    }, []);

    function onLoadMore() {
        if (!isFetching && (totalPages > currentPage || totalPages === 0)) {
            dispatch(fetchCharacters(currentPage + 1));
        }
    }

    return (
        <Container>
            <CustomGradient colors={["#87BFCF", "#7dd333"]}/>
            <CustomHeader title={"Characters"} navigation={navigation}/>
            <CustomTitle>Characters</CustomTitle>
            <FlatListView>
                <CustomFlatList
                    data={currentCharacters}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={onLoadMore}
                    onEndReachedThreshold={0.01}
                    renderItem={({item, index}: any) => (
                        <CharacterListItem item={item} index={index}/>
                    )}
                >
                </CustomFlatList>
            </FlatListView>
            {isFetching && <SpinnerView><CustomSpinner size={60} color="#7E4896"/></SpinnerView>}
        </Container>
    );
}

export default CharactersScreen;