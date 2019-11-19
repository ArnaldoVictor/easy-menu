import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import Easy from '../../services/firebase';
import AsyncStorage from '@react-native-community/async-storage';

export default (props) => {
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState(undefined);
  const dispatch = useDispatch();

  async function getPersistData(){
    let key = await AsyncStorage.getItem('key');
    let address = await AsyncStorage.getItem('address');

    
    if(key != undefined && address != undefined){
      dispatch({type:'RETRIEVE_DATA', key, address});
      props.navigation.navigate('Home');
    }

  }

  useEffect(()=>{

    Easy.addAuthListener((user)=>{
      if(user)
        setUser(user);
      else
        setUser('');
      getPersistData();    
    });

  }, []);


  useEffect(()=>{
    async function setData(){
      if(user != undefined && user !== ''){
        const ref = Easy.getUserData(user.uid);
        await ref.once('value', getUserData);
        dispatch({type:'SET_ADDRESS', address:userData[0]});
  
        dispatch({type:'SIGN_IN', uid:user.uid, address:userData[0]});
        props.navigation.navigate('Home');
      }
    }
    setData();


  },[user])


  // useEffect(()=>{
  //   dispatch({type:'SET_ADDRESS', address:userData[0]});
  // }, [userData])


  function getUserData(snapshot){
    const list = [];

    list.push(snapshot.child('address').val());
    list.push(snapshot.child('status').val());

    setUserData(list);

  }

  function signIn(values){
    if(values.email != '' && values.password != ''){

      Easy.login(values.email, values.password).catch(error=>{

        switch(error.code){
          case 'auth/invalid-email':
            Alert.alert('ERRO', 'E-mail inválido');
            break;
          case 'auth/user-disabled':
            Alert.alert('ERRO', 'Está conta foi desativada');
            break;
          case 'auth/user-not-found':
            Alert.alert('ERRO', 'Verifique se os dados foram digitados corretamente!');
            break;
          case 'auth/wrong-password':
            Alert.alert('ERRO', 'Verifique se os dados foram digitados corretamente!');
            break;
          default:
            Alert.alert('ERRO', 'Algo aconteceu de errado, tente novamente mais tarde!');
            break;
          
        }
      });
    }else{
      Alert.alert('ERRO', 'É necessário preencher todos os campos!');
    }
  }


  return (

    // Container

    <View style={styles.Container}>
      
      <Image style={styles.Logo} source={require('../../assets/images/logo.png')}/>
      
      {/* Form */}
        <Formik
          initialValues={{ email:'', password:'' }}
          onSubmit={values => signIn(values)}
        >
        { ( { handleChange, handleSubmit, values } ) => (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.FormText}> E-mail: </Text>
            </View>
    
            <TextInput 
              style={styles.Input}
              keyboardType='email-address'
              placeholder='Digite seu e-mail...'
              value={values.email}
              onChangeText={handleChange('email')}
            />      
    
            <View style={styles.textContainer}>
              <Text style={styles.FormText}> Senha: </Text>
            </View>
    
            <TextInput
              style={styles.Input}
              secureTextEntry={true}
              placeholder='Digite sua senha...'
              onChangeText={handleChange('password')}
            />

        
        { /* Text Buttons and Buttons */ }
        <View style={styles.TextButtons}>
          <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>
            <Text style={styles.TButton}>Cadastrar-se</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Alert.alert('Esqueci a senha', 'Em desenvolvimento!')}>
            <Text style={styles.TButton}>Esqueci a senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.LoginBtn} onPress={handleSubmit}>
            <Text style={styles.TBtn}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.QrcodeBtn} onPress={()=>props.navigation.navigate('QRCode')}>
            <Text style={styles.TBtn}>Ler QRCode</Text>
        </TouchableOpacity>
      </>
      )}
      </Formik>

    </View>
  );

}
