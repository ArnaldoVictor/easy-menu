import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    headerOrder:{
        width:width,
        height:40,
        backgroundColor:'#3B5998',
        flexDirection:'row',
        alignItems:'center'
    },    
    orderStatus:{
        width:32,
        height:32,
        marginLeft:20,
        marginRight:20
    },
    address:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 28,
        color:'#FFF'
    },
    productList:{
        marginLeft:20
    },
    priceArea:{
        width:width-40,
        marginLeft:20,
        borderTopWidth:0.4,
        borderColor:'#6A6A6A',
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
        marginTop:10
    },
    total:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 23
    },
    price:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 23,
        color:'#3DD6B5'
    }


})

export default styles;