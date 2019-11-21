import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/index';
import Routes from './routes';
import SplashScreen from 'react-native-splash-screen';

export default function EasyMenu() {

  useEffect(()=>{
    SplashScreen.hide();
  }, [])

  return (
    <Provider store={store}>
        <StatusBar backgroundColor="#FFFFFF" barStyle='dark-content'/>
        <Routes />
    </Provider>
  );
}
