import React from 'react';
import { Transition } from 'react-native-reanimated';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from './pages/Login/index';
import QRCode from './pages/QRCode/index';
import SignUp from './pages/SignUp/index';
import Home from './pages/Home/index';

const HomeScreen = createDrawerNavigator({
    Home
});

const StackScreens = createStackNavigator({
    Login:{
        screen:Login,
        navigationOptions:{
            header:null
        }
    },
    QRCode:{
        screen:QRCode,
        navigationOptions:{
            header:null
        }
    },
    SignUp:{
        screen:SignUp,
        navigationOptions:{
            header:null
        }
    }
});


const Routes = createAppContainer(
    createAnimatedSwitchNavigator({
        StackScreens,
        HomeScreen
    }, {
        transition: (
            <Transition.Together>
              <Transition.Out
                type="slide-left"
                durationMs={500}
                interpolation="easeIn"
              />
              <Transition.In type="fade" durationMs={500} />
            </Transition.Together>
        )
    })
);

export default Routes;