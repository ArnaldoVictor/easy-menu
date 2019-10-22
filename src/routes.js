import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './pages/Login/index';
import QRCode from './pages/QRCode/index';

const Routes = createAppContainer(
    createStackNavigator({
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
        }
    })
);

export default Routes;