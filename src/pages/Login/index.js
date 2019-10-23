import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './styles';

export default function Login(props) {
  return (

    // Container
    <View style={styles.Container}>
        <Image style={styles.Logo} source={require('../../assets/images/logo.png')}/>
        
        {/* Form */}
          <View style={styles.textContainer}>
            <Text style={styles.FormText}> Usuario: </Text>
          </View>
          <TextInput style={styles.Input} placeholder='Digite seu usuário...'/>      
          <View style={styles.textContainer}>
            <Text style={styles.FormText}> Senha: </Text>
          </View>
          <TextInput style={styles.Input} placeholder='Digite sua senha...'/>
        
        {/* Text Buttons and Buttons */}
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
