import React, { useEffect } from 'react';
import { View  } from 'react-native';
import Easy from '../../services/firebase';

export default (props) => {

    useEffect(()=>{
        async function signOut(){
            await Easy.logout();
            props.navigation.navigate('Login');
          }
        signOut();
    }, []);
    
  return (
    <View />    
  );
}
