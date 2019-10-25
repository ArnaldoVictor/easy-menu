import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, ScrollView, StatusBar, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import Easy from '../../services/firebase';

export default function SignUp(props) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [cep, setCep] = useState(null);
  const [address, setAdress] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [check, setCheck] = useState(false);

  useEffect(()=>{
    Easy.addAuthListener((user)=>{
      if(user){
        props.navigation.navigate('Home');
      }
    });
  });

  function cpfMask(CPF){
    CPF = CPF
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
    setCpf(CPF);
  }

  function cepMask(CEP){
    CEP = CEP
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
    setCep(CEP);
  }

  function phoneMask(pNumber){
    pNumber = pNumber
    .replace(/\D/g, '')
    .replace(/^(\d{1})/, '($1')
    .replace(/(\(\d{2})(\d)/, '$1) $2')
    .replace(/(\s\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1' );
    setPhoneNumber(pNumber);
  }

  function signUp(){
    Easy.createUser(email, password);
    Easy.registerUserData(uid, name, cep, address, cpf, phoneNumber);
  }

  return (
    //Container
    <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#FFFFFF" barStyle='dark-content'/>

      {/* Header */}
      <View style={styles.TextTop}>
        <Text style={styles.TextHeader}>Cadastre-se</Text>
        <Text style={styles.TextDesc}>Crie sua conta agora mesmo</Text>
      </View>

      {/* Logo */}
      <View style={styles.LogoContainer}>
        <Image style={styles.Logo} source={require('../../assets/images/logo.png')}/>
        <Text style={styles.TextDesc}>Todos os campos são obrigatórios</Text>
      </View>

      {/* Form */}
      <View style={styles.FormData}>
        <TextInput style={styles.Input} placeholder='Nome' placeholderTextColor='#6A6A6A' onChangeText={(name)=>setName(name)}/>
        <TextInput style={styles.Input} keyboardType='email-address' placeholder='Email'placeholderTextColor='#6A6A6A' onChangeText={(email)=>setEmail(email)}/>
        <TextInput style={styles.Input} secureTextEntry={true} placeholder='Senha' placeholderTextColor='#6A6A6A' onChangeText={(password)=>setPassword(password)}/>
        <TextInput style={styles.Input} secureTextEntry={true} placeholder='Confirmar Senha' placeholderTextColor='#6A6A6A' onChangeText={(ConfirmPass)=>setConfirmPass(ConfirmPass)}/>
        <TextInput style={styles.Input} maxLength={9} keyboardType='numeric' value={cep} placeholder='CEP' placeholderTextColor='#6A6A6A' onChangeText={(CEP)=>cepMask(CEP)}/>
        <TextInput style={styles.Input} placeholder='Endereço' placeholderTextColor='#6A6A6A' onChangeText={(Adress)=>setAdress(Adress)}/>
        <TextInput style={styles.Input} maxLength={14} keyboardType='numeric' value={cpf} placeholder='CPF' placeholderTextColor='#6A6A6A' onChangeText={(CPF)=>cpfMask(CPF)}/>
        <TextInput style={styles.Input} maxLength={15} keyboardType='phone-pad' value={phoneNumber} placeholder='Telefone' placeholderTextColor='#6A6A6A' onChangeText={(pNumber)=>phoneMask(pNumber)}/>
      </View>

      {/* Terms and Conditions */}
      <View style={styles.CheckBoxArea}>
        <CheckBox onChange={()=>setCheck(!check)} value={check}/>
        <Text style={{lineHeight:30}}>Eu li e concordo com os </Text>
        <TouchableOpacity onPress={()=>Alert.alert('Termos de Uso', 'Em desenvolvimento!')}>
          <Text style={{color:'#74B9FF', lineHeight:30}}>termos de uso</Text>
        </TouchableOpacity>
      </View>

      {/* Buttons */}
      <View style={styles.ButtonArea}>
        <TouchableOpacity style={styles.SignUp} onPress={()=>Alert.alert('Cadastrar', 'Em desenvolvimento!')}>
          <Text style={styles.TBtn}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Back} onPress={()=>props.navigation.navigate('Login')}>
          <Text style={styles.TBtn}>Voltar</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}
