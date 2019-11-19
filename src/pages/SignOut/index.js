import React, { useEffect } from 'react';
import { View  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Easy from '../../services/firebase';
import AsyncStorage from '@react-native-community/async-storage';

export default (props) => {
    const dispatch = useDispatch();
    const uid = useSelector(state => state.auth.uid);

    useEffect(()=>{

      async function signOut(){
          await dispatch({type:'CLEAR_ALL'});
          await AsyncStorage.multiRemove(['key', 'address']);
          if(uid !== '')
            await Easy.logout();
          await dispatch({type:'SIGN_OUT', uid:'', address:''});
          props.navigation.navigate('Login');
      }
      signOut();
         
    }, []);
    
  return (
    <View />    
  );
}
