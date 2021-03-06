import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import { Alert } from 'react-native';
import store from '../store/index';

export default { 

    async login(email, password){
        await auth().signInWithEmailAndPassword(email, password);
    },

    async logout(){
        await auth().signOut();
        let titleMsg = store.getState().auth.status === 0 ? 'Sessão' : 'Deslogado';
        let logoutMsg = store.getState().auth.status === 0 ? 'Sessão encerrada!' : 'Agora você está deslogado do sistema!';
        return Alert.alert(titleMsg, logoutMsg);
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

    registerProduct(name, desc, price, items = [], imageUrl, section, recommend){
        let ref = database().ref('products');
        let key = ref.push().key;
        ref.child(key).set({
            name,
            desc,
            price,
            items,
            imageUrl,
            sold:0,
            section,
            recommend:recommend === true ? 1 : 0
        });
    },

    newSection(sectionName, url){
        let ref = database().ref('sections');
        ref.child(sectionName).set({
            name:sectionName,
            imageUrl:url
        });
    },

    newPromotion(promotionName, url, items = []){
        let ref = database().ref('promotions');
        ref.child(promotionName).set({
            name:promotionName,
            imageUrl:url,
            products:items
        });
    },

    setOrder(tempKey, address, products, extraItems, observation, qtd, total){
        const ref = database().ref('orders/undone');
        let key = tempKey === '' ? ref.push().key : tempKey;
        let orderKey = ref.child(key).push().key;

        if(tempKey === ''){
            ref.child(key+'/address').set(address);
        }

        ref.child(key).child(orderKey).set({
            products,
            extraItems,
            observation,
            qtd,
            total
        })

        return key;
    },

    getOrderProducts(key){
        return database().ref('orders/undone/'+key)
    },

    getAllOrderProducts(){
        return database().ref('orders/undone');
    },

    refUploadImage(path){
        return storage().ref().child(path)
    },

    getImageURL(path){
        return storage().ref(path).getDownloadURL()
    },

    getProducts(){
        return database().ref('products')
    },
    
    getSectionList(){
        return database().ref('sections')
    },
    getPromotionList(){
        return database().ref('promotions')
    },

    getPromotionItems(child){
        return database().ref('promotions/'+child+'/products');
    },

    getUserData(uid){
        return database().ref('user-data/'+uid);
    }

};