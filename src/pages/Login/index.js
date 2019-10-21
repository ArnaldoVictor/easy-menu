import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Container, Logo, FormText, Input, TextButtons, TButton, LoginBtn, QrcodeBtn, TBtn   } from './styles';

export default function Login() {
  return (
    <Container>
        <Logo source={require('../../assets/images/logo.png')}/>

        <FormText> Usuario: </FormText>
        <Input placeholder='Digite seu usuário...'/>
        <FormText> Senha: </FormText>
        <Input placeholder='Digite sua senha...'/>
        

        <TextButtons>

          <TouchableOpacity onPress={()=>alert('me clicou')}>
            <TButton>Cadastrar-se</TButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>alert('me clicou')}>
            <TButton>Esqueci a senha</TButton>
          </TouchableOpacity>

        </TextButtons>

        <LoginBtn onPress={()=>alert('me clicou')}>
            <TBtn>Logar</TBtn>
        </LoginBtn>

        <QrcodeBtn onPress={()=>alert('me clicou')}>
            <TBtn>Ler QRCode</TBtn>
        </QrcodeBtn>

    </Container>
  );
}
