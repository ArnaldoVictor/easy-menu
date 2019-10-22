import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Login(props) {
  return (

    // Container
    <View style={styles.Container}>
        <Image style={styles.Logo} source={require('../../assets/images/logo.png')}/>
        
        {/* Form */}
        <Text style={styles.FormText}> Usuario: </Text>
        <TextInput style={styles.Input} placeholder='Digite seu usuário...'/>
        <Text style={styles.FormText}> Senha: </Text>
        <TextInput style={styles.Input} placeholder='Digite sua senha...'/>
        
        {/* Buttons */}
        <View style={styles.TextButtons}>

          <TouchableOpacity onPress={()=>alert('me clicou')}>
            <Text style={styles.TButton}>Cadastrar-se</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>alert('me clicou')}>
            <Text style={styles.TButton}>Esqueci a senha</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.LoginBtn} onPress={()=>alert('me clicou')}>
            <Text style={styles.TBtn}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.QrcodeBtn} onPress={()=>props.navigation.navigate('QRCode')}>
            <Text style={styles.TBtn}>Ler QRCode</Text>
        </TouchableOpacity>

    </View>
  );
}
