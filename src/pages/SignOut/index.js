import React, { useEffect } from 'react';
import { View  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Easy from '../../services/firebase';
import AsyncStorage from '@react-native-community/async-storage';
import store from '../../store/index';

export default (props) => {
    const dispatch = useDispatch();

    useEffect(()=>{

      async function signOut(){
          await dispatch({type:'CLEAR_ALL'});
          await AsyncStorage.multiRemove(['key', 'address']);
          await AsyncStorage.setItem('logout', 'yes');
          let state = await dispatch({type:'SIGN_OUT', uid:'', address:'', satus:null});
          if(state.uid === '')
            await Easy.logout();
          props.navigation.navigate('Login');
      }
      signOut();
         
    }, []);
    
  return (
    <View />    
  );
}
