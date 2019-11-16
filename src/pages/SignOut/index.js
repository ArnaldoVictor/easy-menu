import React, { useEffect } from 'react';
import { View  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Easy from '../../services/firebase';
import AsyncStorage from '@react-native-community/async-storage';

export default (props) => {
    const dispatch = useDispatch();

    useEffect(()=>{

      // async function signOut(){
      //     await dispatch({type:'CLEAR_KEY'});
      //     await AsyncStorage.multiRemove(['key', 'address']);
      // }
      // signOut();
    
      // let state = dispatch({type:'SIGN_OUT', uid:''});
      // console.log(state.uid);
      // if(state.uid ===  ''){
      //   Easy.logout();
      //   props.navigation.navigate('Login', {uid:''});
      // }

      Easy.logout();
      props.navigation.navigate('Login');
         
    }, []);
    
  return (
    <View />    
  );
}
