import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import { Alert } from 'react-native';

export default { 

    async login(email, password){
        await auth().signInWithEmailAndPassword(email, password);
        return Alert.alert('Logado', 'Login feito com sucesso!');
    },

    logout(){
        auth().signOut();
        return Alert.alert('Deslogado', 'Agora você está deslogado do sistema!');
    },

    createUser(email, password){
        return auth().createUserWithEmailAndPassword(email, password).catch( error =>{
            switch(error.code){
                case 'auth/email-already-in-use':
                    Alert.alert('ERRO', 'E-mail JÁ ESTÁ EM USO')
                    break;
                case 'auth/invalid-email':
                    Alert.alert('ERRO', 'E-mail inválido')
                    break;
                case 'auth/operation-not-allowed':
                    Alert.alert('ERRO', 'Operação não permitida!')
                    break;
                case 'auth/weak-password':
                    Alert.alert('ERRO', 'Senha muito fraca!')
                    break;
                default:
                    Alert.alert('ERRO', 'Algo aconteceu de errado tente novamente mais tarde!')
                    break;
            }
        } );
    },

    addAuthListener(callback){
        return auth().onAuthStateChanged(callback);
    },

    registerUserData(uid, name, cep, address, cpf, phoneNumber, status){
        let ref = database().ref('user-data');
        ref.child(uid).set({
            status,
            name,
            cep,
            address,
            cpf,
            phoneNumber
        })

        return Alert.alert('Cadastrado', 'Cadastrado com sucesso!');
    },

    registerProduct(name, desc, price, items = []){
        let ref = database().ref('products');
        ref.child(name).set({
            name,
            desc,
            price,
            items
        });
    },

    refUploadImage(path){
        return storage().ref().child(path)
    }
    
};