import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/index';
import Routes from './routes';

export default function EasyMenu() {
  return (
    <Provider store={store}>
        <StatusBar backgroundColor="#FFFFFF" barStyle='dark-content'/>
        <Routes />
    </Provider>
  );
}
