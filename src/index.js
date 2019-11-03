import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Store from '../src/store/index';
import Routes from './routes';

export default function EasyMenu() {
  return (
    <Provider store={Store}>
      <StatusBar backgroundColor="#FFFFFF" barStyle='dark-content'/>
      <Routes />
    </Provider>
  );
}
