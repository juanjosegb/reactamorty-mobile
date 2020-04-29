import React, {useEffect} from 'react';
import {Container, Icon} from "native-base";
import {CustomHeader} from "@Components/Common/Header";
import {CustomSafeAreaView, SpinnerView} from "@Custom/View";
import {CustomFlatList} from "@Custom/FlatList";
import {LocationListItem} from "@Components/Common/ListItem/Locations";
import {CustomDividerScreenBottom, CustomDividerScreenTop} from "@Custom/Divider";
import {CustomGradient} from "@Custom/Gradient";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@Store/reducers";
import {getCurrentLocations, getLocationsFetching, getCurrentPage, getTotalPages, ILocationState} from "@Store/reducers/locations";
import {fetchLocations, fetchLocationsStart} from "@Store/actions/locations";
import {CustomSpinner} from "@Custom/Spinner";

export type Props = { navigation: any }

const LocationsScreen = (props: Props) => {
    const {navigation} = props;
    const dispatch = useDispatch();
    const locationsState: ILocationState = useSelector((state: RootState) => state.locationsState);
    const currentLocations = getCurrentLocations(locationsState);
    const isFetching = getLocationsFetching(locationsState);
    const currentPage = getCurrentPage(locationsState);
    const totalPages = getTotalPages(locationsState);

    useEffect(() => {
        dispatch(fetchLocationsStart());
        dispatch(fetchLocations(1));
    }, []);

    function onLoadMore() {
        if (!isFetching && (totalPages > currentPage || totalPages === 0)) {
            dispatch(fetchLocations(currentPage + 1));
        }
    }

    return (
        <Container>
            <CustomGradient colors={["#87BFCF", "#7dd333"]}/>
            <CustomHeader title={"Locations"} navigation={navigation}>
                <Icon style={{fontSize: 30}} name="menu" onPress={() => navigation.openDrawer()}/>
            </CustomHeader>
            <CustomDividerScreenTop/>
            <CustomSafeAreaView>
                <CustomFlatList
                    data={currentLocations}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={onLoadMore}
                    onEndReachedThreshold={0.01}
                    renderItem={({item, index}: any) => (
                        <LocationListItem navigation={navigation} item={item} index={index}/>
                    )}
                >
                </CustomFlatList>
            </CustomSafeAreaView>
            <CustomDividerScreenBottom/>
            {isFetching && <SpinnerView><CustomSpinner size={60} color="#7E4896"/></SpinnerView>}
        </Container>
    );
}

export default LocationsScreen;
