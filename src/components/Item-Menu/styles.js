import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item:{
        marginLeft:20
    },
    itemImage:{
        width:200,
        height:200,
        borderRadius:20
    },
    gradient:{
        width:200,
        height:200,
        borderRadius:20,
        marginTop:-200
    },
    productName:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        zIndex:99,
        color:'#FFF',
        marginTop:-65,
        marginLeft:10

    },
    productPrice:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 16,
        color:'#00FFC8',
        marginLeft:10,
        zIndex:99
    }

});

export default styles;