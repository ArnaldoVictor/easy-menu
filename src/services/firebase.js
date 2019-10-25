import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export default { 

    login(email, password){
        auth().signInWithEmailAndPassword(email, password);
        return Alert.alert('Logado', 'Login feito com sucesso!');
    },
    logout(){
        auth().signOut();
        return Alert.alert('Deslogado', 'Agora você está deslogado do sistema!');
    },
    createUser(email, password){
        return database().createUserWithEmailAndPassword(email, password);
    },
    addAuthListener(callback){
        return auth().onAuthStateChanged(callback);
    },
    registerUserData(uid, name, cep, address, cpf, phoneNumber){
        let ref = database().ref('userData');
        ref.child(uid).set({
            name,
            cep,
            address,
            cpf,
            phoneNumber
        })
    }
    
};