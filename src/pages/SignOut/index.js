import React, { useEffect } from 'react';
import { View  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Easy from '../../services/firebase';
import AsyncStorage from '@react-native-community/async-storage';

export default (props) => {
    const key = useSelector(state => state.order.key);
    const uid = useSelector(state => state.auth.uid);
    const dispatch = useDispatch();

    useEffect(()=>{

      async function signOut(){
          await dispatch({type:'CLEAR_KEY'});
          await AsyncStorage.multiRemove(['key', 'address']);
      }
    
      let state = dispatch({type:'SIGN_OUT'});
      console.log(state.uid);
      if(state.uid !== '')
        Easy.logout();    
        
      signOut();
      props.navigation.navigate('Login', {user:'logout'});
          
    }, []);
    
  return (
    <View />    
  );
}
