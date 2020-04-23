import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import {rootReducer} from "@Store/reducers";

import rootSaga from './sagas';
import {AsyncStorage} from "react-native";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default () => ({persistor, store});