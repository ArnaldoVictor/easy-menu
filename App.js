import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { firebase } from '@react-native-firebase/database';

export default function Index(){
  const [teste, setTeste] = useState('');

  useEffect(()=>{
    firebase.database().ref('teste').once('value').then((snapshot)=>{
      setTeste(snapshot.val());
    });
  });

  return (
    <View>
      <Text>Cardápio Digital</Text>
      <Text>{teste}</Text>
    </View>
  );
  
}