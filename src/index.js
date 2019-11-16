import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Store, persistor } from './store/index';
import Routes from './routes';

export default function EasyMenu() {
  return (
    <Provider store={Store}>
        <StatusBar backgroundColor="#FFFFFF" barStyle='dark-content'/>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
