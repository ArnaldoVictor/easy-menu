import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './pages/Login/index';
import QRCode from './pages/QRCode/index';
import SignUp from './pages/SignUp/index';

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
        },
        SignUp:{
            screen:SignUp,
            navigationOptions:{
                header:null
            }
        }
    })
);

export default Routes;