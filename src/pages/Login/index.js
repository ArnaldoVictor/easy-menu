import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import styles from './styles';

export default function Login(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (

    // Container
    <View style={styles.Container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle='dark-content'/>
      <Image style={styles.Logo} source={require('../../assets/images/logo.png')}/>
      
      {/* Form */}
        <View style={styles.textContainer}>
          <Text style={styles.FormText}> Email: </Text>
        </View>
        <TextInput style={styles.Input} keyboardType='email-address' placeholder='Digite seu email...' onChangeText={(email)=>setEmail(email)}/>      
        <View style={styles.textContainer}>
          <Text style={styles.FormText}> Senha: </Text>
        </View>
        <TextInput style={styles.Input} secureTextEntry={true} placeholder='Digite sua senha...' onChangeText={(password)=>setPassword(password)}/>
      
      {/* Text Buttons and Buttons */}
      <View style={styles.TextButtons}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>
          <Text style={styles.TButton}>Cadastrar-se</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Alert.alert('Esqueci a senha', 'Em desenvolvimento!')}>
          <Text style={styles.TButton}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.LoginBtn} onPress={()=>Alert.alert('Logar', 'Em desenvolvimento!')}>
          <Text style={styles.TBtn}>Logar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.QrcodeBtn} onPress={()=>props.navigation.navigate('QRCode')}>
          <Text style={styles.TBtn}>Ler QRCode</Text>
      </TouchableOpacity>

    </View>
  );
}
