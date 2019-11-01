import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styles from './styles';
import Easy from '../../services/firebase';
import Mask from '../../common/textMask';
import verifyCPF from '../../common/cpfValidation';

export default (props) => {
  const [check, setCheck] = useState(false);
  const validations = yup.object().shape({
    name: yup.string()
      .required('(*) Campo Obrigatório'),
    email: yup.string()
      .email('E-mail inválido')
      .required('(*) Campo Obrigatório'),
    password: yup.string()
      .min(6, 'min. 6 caracteres')
      .required('(*) Campo Obrigatório'),
    confirmPass: yup.string()
      .min(6, 'min. 6 caracteres')
      .required('(*) Campo Obrigatório'),
    cep: yup.string()
      .min(9, 'CEP inválido')
      .required('(*) Campo Obrigatório'),
    address: yup.string()
      .min(5, 'Preencha o campo corretamente')
      .required('(*) Campo Obrigatório'),
    cpf: yup.string()
      .min(14, 'CPF Inválido')
      .required('(*) Campo Obrigatório'),
    phoneNumber: yup.string()
      .min(15, 'Número Inválido')
      .required('(*) Campo Obrigatório')

  });

  async function signUp(values){
    if(check){
      if(verifyCPF.testCPF(values.cpf)){
        if(values.password === values.confirmPass){
          await Easy.createUser(values.email, values.password);
          Easy.addAuthListener( async (user)=>{
            if(user){
              await Easy.registerUserData(user.uid, values.name, values.cep, values.address, values.cpf, values.phoneNumber, 0);
              await props.navigation.navigate('Home');
            }
          });
        }else{
          Alert.alert('ERRO', 'As senhas devem coincidirem');
        }
      }else{
        Alert.alert('ERRO', 'CPF Inválido!');
      }
    }else{
      Alert.alert('ERRO', 'É necessário aceitar os termos e condições do serviço');
    }
  }

  return (
    //Container
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={{ alignItems:'center', justifyContent:'center'}}
    >

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
      <Formik
        initialValues={{
          name:'',
          email:'',
          password:'',
          confirmPass:'',
          cep:'',
          address:'',
          cpf:'',
          phoneNumber:''
        }}
        onSubmit={values => signUp(values)}
        validationSchema={validations}
      >
      {({ handleChange, handleBlur, handleSubmit, values, isValid })=>(
        <>
          <View style={styles.FormData}>
            
            <TextInput 
              style={styles.Input}
              placeholder='Nome' 
              placeholderTextColor='#6A6A6A'
              onBlur={handleBlur('name')}
              onChangeText={ handleChange('name') }
              value={values.name}
            />
            <Text style={styles.error}><ErrorMessage name='name'/></Text>

            <TextInput
              style={styles.Input}
              keyboardType='email-address'
              placeholder='E-mail'
              placeholderTextColor='#6A6A6A'
              onBlur={handleBlur('email')}
              onChangeText={ handleChange('email') }
              value={values.email}
            />
            <Text style={styles.error}><ErrorMessage name='email'/></Text>

            <TextInput
              style={styles.Input}
              secureTextEntry={true}
              placeholder='Senha'
              placeholderTextColor='#6A6A6A'
              onBlur={handleBlur('password')}
              onChangeText={ handleChange('password') }
              value={values.password}
            />
            <Text style={styles.error}><ErrorMessage name='password'/></Text>

            <TextInput 
              style={styles.Input}
              secureTextEntry={true}
              placeholder='Confirmar Senha'
              placeholderTextColor='#6A6A6A'
              onBlur={handleBlur('confirmPass')}
              onChangeText={ handleChange('confirmPass') }
              value={values.confirmPass}
            />
            <Text style={styles.error}><ErrorMessage name='confirmPass'/></Text>

            <TextInput
              style={styles.Input}
              maxLength={9}
              keyboardType='numeric'
              placeholder='CEP'
              placeholderTextColor='#6A6A6A'
              onBlur={handleBlur('cep')}
              onChangeText={ handleChange('cep') }
              value={Mask.cepMask(values.cep)}
            />
            <Text style={styles.error}><ErrorMessage name='cep'/></Text>

            <TextInput
              style={styles.Input}
              placeholder='Endereço'
              placeholderTextColor='#6A6A6A'
              onBlur={handleBlur('address')}
              onChangeText={ handleChange('address') }
              value={values.address}
            />
            <Text style={styles.error}><ErrorMessage name='address'/></Text>

            <TextInput
              style={styles.Input}
              maxLength={14}
              keyboardType='numeric'
              placeholder='CPF'
              placeholderTextColor='#6A6A6A'
              onBlur={handleBlur('cpf')}
              onChangeText={ handleChange('cpf') }
              value={Mask.cpfMask(values.cpf)}
            />
            <Text style={styles.error}><ErrorMessage name='cpf'/></Text>

            <TextInput
              style={styles.Input}
              maxLength={15}
              keyboardType='phone-pad'
              placeholder='Telefone'
              placeholderTextColor='#6A6A6A'
              onBlur={handleBlur('phoneNumber')}
              onChangeText={ handleChange('phoneNumber') }
              value={Mask.pNumberMask(values.phoneNumber)}
            />
            <Text style={styles.error}><ErrorMessage name='phoneNumber'/></Text>

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
            <TouchableOpacity style={styles.SignUp} onPress={handleSubmit} disabled={!isValid}>
              <Text style={styles.TBtn}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Back} onPress={()=>props.navigation.navigate('Login')}>
              <Text style={styles.TBtn}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      </Formik>

    </ScrollView>
  );
}
