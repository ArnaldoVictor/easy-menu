import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import Easy from '../../services/Firebase/firebase'

export default function Home(props) {

  function signOut(){
    Easy.logout();
    props.navigation.navigate('Login');
  }

  return (
    <View style={styles.Container}>
        <Text>Pagina Home em Desenvolvimento!</Text>
        <Button title='Deslogar' onPress={signOut}/>
    </View>
  );
}
