import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export default { 

    async login(email, password){
        await auth().signInWithEmailAndPassword(email, password);
        return Alert.alert('Logado', 'Login feito com sucesso!');
    },
    async logout(){
        await auth().signOut();
        return Alert.alert('Deslogado', 'Agora você está deslogado do sistema!');
    },
    createUser(email, password){
        return database().createUserWithEmailAndPassword(email, password);
    },
    addAuthListener(callback){
        return auth().onAuthStateChanged(callback);
    }
    
};