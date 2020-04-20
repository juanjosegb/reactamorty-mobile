import React, {useRef, useState} from 'react';
import {Container, Content} from "native-base";
import {CustomHeader} from "@Components/Common/Header";
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Platform, Text, View} from "react-native";
import {CustomTitle} from "@Custom/Text";

export type Props = { navigation: any }

const HomeScreen = (props: Props) => {
    const [activeItem, setActiveItem] = useState(0);
    const carouselRef = useRef(null);
    const {navigation} = props;
    const carouselItems = [
        {
            title: "Image 1",
            source: "https://vertele.eldiario.es/2019/05/15/noticias/Rick-Morty-regresan-noviembre-temporada_2121997823_13600862_1818x1024.jpg",
        },
        {
            title: "Image 2",
            source: "https://www.alfabetajuega.com/wp-content/uploads/2020/02/rick-morty-temporada-4.jpg",
        },
        {
            title: "Image 3",
            source: "https://poptv.orange.es/wp-content/uploads/sites/3/2019/11/rick-morty.jpg",
        },
        {
            title: "Image 4",
            source: "https://wallpapervibe.com/wp-content/uploads/2019/07/rick-morty-wallpapers69.jpg",
        },
        {
            title: "Image 5",
            source: "https://12pulgadasbcn.com/img/cms/fotos%20blog/Rick%20&%20Morty/contenidos_rickmorty-85-86.jpg",
        },
    ]

    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    const goBack = () => {
        carouselRef.current.snapToPrev();
    };

    function renderItem({item, index}: any, parallaxProps: any) {
        return (
            <View style={{
                backgroundColor: 'grey',
                borderRadius: 8,
                justifyContent: "center",
                alignContent: "center",
                height: 300,
                width: 300
            }}>
                <ParallaxImage
                    source={{uri: item.source}}
                    containerStyle={{
                        marginBottom: Platform.select({ios: 0, android: 1}),
                        backgroundColor: 'white',
                        borderRadius: 8,
                        width: 300,
                        height: 300
                    }}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
        );
    }

    return (
        <Container>
            <CustomHeader title={"Home"} navigation={navigation}/>
            <Content padder>
                <CustomTitle>ReactAmorty</CustomTitle>
                <Carousel
                    ref={carouselRef}
                    layout={"default"}
                    data={carouselItems}
                    sliderWidth={350}
                    sliderHeight={300}
                    itemWidth={300}
                    renderItem={renderItem}
                    hasParallaxImages={true}
                    onSnapToItem={index => setActiveItem(index)}/>
                <Text style={{
                    paddingTop: 40,
                    textAlign: "justify"
                }}>
                    Rick and Morty follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted
                    but fretful grandson Morty Smith, who split their time between domestic life and interdimensional
                    adventures.
                </Text>
            </Content>
        </Container>
    );
}

export default HomeScreen;
