import { createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import Reducers from './reducers';

const persistedReducer = persistReducer({
    key:'root',
    storage:AsyncStorage,
    whitelist:['order', 'auth'],
    blacklist:['extra']
}, Reducers);

const Store = createStore(persistedReducer);

let persistor = persistStore(Store);

export { Store, persistor };