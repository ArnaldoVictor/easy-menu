import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default function EasyMenu() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#FFFFFF" barStyle='dark-content'/>
      <Routes />
    </React.Fragment>
  );
}
