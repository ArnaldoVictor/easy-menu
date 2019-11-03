import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    checkBoxArea:{
        flexDirection:'row'
    },
    item:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30,
        color:'#6A6A6A'
    },
    priceArea:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    priceText:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight:30,
        color:'#3DD6B5'
    }

});

export default styles;