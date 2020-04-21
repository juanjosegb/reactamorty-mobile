import React, {useRef, useState} from 'react';
import {Container, Content} from "native-base";
import {CustomHeader} from "@Components/Common/Header";
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Platform, Text, View} from "react-native";
import {CustomTitle, DescriptionText} from "@Custom/Text";
import {carouselItems} from "@Constants/CarouselItems";
import CarouselItem from "@Custom/Carousel";

export type Props = { navigation: any }

const HomeScreen = (props: Props) => {
    const [activeItem, setActiveItem] = useState(0);
    const carouselRef = useRef(null);
    const {navigation} = props;

    function renderItem({item, index}: any, parallaxProps: any) {
        return (
            <CarouselItem>
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
            </CarouselItem>
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
                <DescriptionText>
                    Rick and Morty follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted
                    but fretful grandson Morty Smith, who split their time between domestic life and interdimensional
                    adventures.
                </DescriptionText>
            </Content>
        </Container>
    );
}

export default HomeScreen;
