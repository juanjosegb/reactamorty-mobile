import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Routes} from "./src/routes/routes";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import configureStore from "@Store/index";

const {persistor, store} = configureStore();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Routes/>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );

}

