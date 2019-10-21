import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './pages/Login/index';

const Routes = createAppContainer(
    createStackNavigator({
        Login:{
            screen:Login,
            navigationOptions:{
                header:null
            }
        }
    })
);

export default Routes;