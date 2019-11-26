import React from 'react';
import { Text } from 'react-native';
import { Transition } from 'react-native-reanimated';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from './pages/Login/index';
import QRCode from './pages/QRCode/index';
import SignUp from './pages/SignUp/index';
import Home from './pages/Home/index';
import NewProduct from './pages/NewProduct/index';
import SignOut from './pages/SignOut/index';
import Product from './pages/Product/index';
import AddSection from './pages/AddSection/index';
import AddPromotion from './pages/AddPromotion/index';
import ProductList from './pages/ProductList/index';
import MyOrders from './pages/MyOrders/index';
import Orders from './pages/Orders/index';
import EditProducts from './pages/EditProducts/index';
import store from './store/index';

const DrawerScreens = createDrawerNavigator({
    Home,
    NewProduct:{
        screen:NewProduct,
        navigationOptions:{
            drawerLabel:()=>store.getState().auth.status === 0 ? null : 'Cadastrar Produto'
        }
    },
    EditProducts:{
        screen:EditProducts,
        navigationOptions:{
            drawerLabel:()=>store.getState().auth.status === 0 ? null : 'Editar Produtos'
        }
    },
    Product:{
        screen:Product,
        navigationOptions:{
            title:'Produto',
            drawerLabel:()=>null
        }
    },
    AddSection:{
        screen:AddSection,
        navigationOptions:{
            drawerLabel:()=>store.getState().auth.status === 0 ? null : 'Adicionar Categoria'
        }
    },
    AddPromotion:{
        screen:AddPromotion,
        navigationOptions:{
            drawerLabel:()=>store.getState().auth.status === 0 ? null : 'Criar Promoção'
        }
    },
    ProductList:{
        screen:ProductList,
        navigationOptions:{
            title:'Lista de Produtos',
            drawerLabel:()=>null
        }
    },
    MyOrders:{
        screen:MyOrders,
        navigationOptions:{
            title:'Meus Pedidos'
        }
    },
    Orders:{
        screen:Orders,
        navigationOptions:{
            drawerLabel:()=>store.getState().auth.status === 0 ? null : 'Pedidos'
        }
    },
    SignOut:{
        screen:SignOut,
        navigationOptions:{
            drawerLabel:()=>store.getState().auth.status === 0 ? 'Encerrar Sessão' : 'Deslogar'
        },
        
    }
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
        DrawerScreens,
        
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