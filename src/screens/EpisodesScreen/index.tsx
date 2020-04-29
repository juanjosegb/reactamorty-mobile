import React, {useEffect} from 'react';
import {Container, Icon} from "native-base";
import {CustomHeader} from "@Components/Common/Header";
import {CustomSafeAreaView, SpinnerView} from "@Custom/View";
import {CustomFlatList} from "@Custom/FlatList";
import {EpisodeListItem} from "@Components/Common/ListItem/Episodes";
import {CustomGradient} from "@Custom/Gradient";
import {CustomDividerScreenBottom, CustomDividerScreenTop} from "@Custom/Divider";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@Store/reducers";
import {
    getCurrentEpisodes,
    getCurrentPage,
    getEpisodesFetching,
    getTotalPages,
    IEpisodeState
} from "@Store/reducers/episodes";
import {fetchEpisodes, fetchEpisodesStart} from "@Store/actions/episodes";
import {CustomSpinner} from "@Custom/Spinner";

export type Props = { navigation: any }

const EpisodesScreen = (props: Props) => {
    const {navigation} = props;
    const dispatch = useDispatch();
    const episodesState: IEpisodeState = useSelector((state: RootState) => state.episodesState);
    const currentEpisodes = getCurrentEpisodes(episodesState);
    const isFetching = getEpisodesFetching(episodesState);
    const currentPage = getCurrentPage(episodesState);
    const totalPages = getTotalPages(episodesState);

    useEffect(() => {
        dispatch(fetchEpisodesStart());
        dispatch(fetchEpisodes(1));
    }, []);

    function onLoadMore() {
        if (!isFetching && (totalPages > currentPage || totalPages === 0)) {
            dispatch(fetchEpisodes(currentPage + 1));
        }
    }

    return (
        <Container>
            <CustomGradient colors={["#87BFCF", "#7dd333"]}/>
            <CustomHeader title={"Episodes"} navigation={navigation}>
                <Icon style={{fontSize: 30}} name="menu" onPress={() => navigation.openDrawer()}/>
            </CustomHeader>
            <CustomDividerScreenTop/>
            <CustomSafeAreaView>
                <CustomFlatList
                    data={currentEpisodes}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={onLoadMore}
                    onEndReachedThreshold={0.01}
                    renderItem={({item, index}: any) => (
                        <EpisodeListItem navigation={navigation} item={item} index={index}/>
                    )}
                >
                </CustomFlatList>
            </CustomSafeAreaView>
            <CustomDividerScreenBottom/>
            {isFetching && <SpinnerView><CustomSpinner size={60} color="#7E4896"/></SpinnerView>}
        </Container>
    );
}

export default EpisodesScreen;
