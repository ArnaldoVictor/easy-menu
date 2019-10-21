import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 123;
    height: 123;

`;

export const FormText = styled.Text`
    height: 19;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16;
    line-height: 19;
    margin-right: 210;
    margin-bottom: 2;

`;

export const Input = styled.TextInput`
    width: 280;
    height: 40;
    background: rgba(196, 196, 196, 0.42);
    border-radius: 20;
    margin-bottom: 5;
    padding-left: 10;
`;

export const TextButtons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 260;
`;

export const TButton = styled.Text`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15;
    line-height: 19;
    color:#3B5998;

`;

export const TBtn = styled.Text`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16;
    line-height: 19;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    color: #FFFFFF;
    
`;

export const LoginBtn = styled.TouchableOpacity`
    width: 280;
    height: 50;
    background-color: #2E2D2B;
    border-radius: 25;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    margin-bottom:10;
    margin-top:10;
    justify-content:center;

`;

export const QrcodeBtn = styled(LoginBtn)`
    background-color: #3B5998;
    margin-top:0;
`;