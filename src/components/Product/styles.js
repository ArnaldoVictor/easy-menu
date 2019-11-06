import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container:{
        width:width-70,
        paddingBottom:10,
        borderBottomWidth:0.4,
        borderBottomColor:'#C4C4C4',
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    last:{
        width:width-70,
        paddingBottom:10,
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    productImage:{
        width:64,
        height:64,
        borderRadius:20,
        marginRight:20
    },
    productName:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14
    },
    productDesc:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        color:'#6A6A6A'
    },
    productPrice:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        color:'#00FFC8',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 0.4},
        textShadowRadius: 1

    }


});

export default styles;