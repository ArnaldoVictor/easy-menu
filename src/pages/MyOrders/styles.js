import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    scrollContainer:{
        flex:1
    },
    header:{
        width:width,
        height:60,
        alignItems:'center',
        flexDirection:'row'
    },
    goBack:{
        marginLeft:20,
        marginRight:20
    },
    headerTitle:{
        backgroundColor:'transparent',
        textAlign:'center',
        alignSelf:'center',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        color:'rgba(0, 0, 0, 0.7)'
    },
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
    addTitle:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 23,
        marginBottom:10,
        marginTop:10,
        marginLeft:20
    },
    extraItemArea:{
        marginHorizontal:20
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
    },
    bill:{
        marginLeft:20,
        width: width-40,
        height: 50,
        borderRadius: 25,
        backgroundColor:'#D82A26',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        marginBottom:20,
        marginTop:10,
        justifyContent:'center'
    },
    TBtn:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 4,
        color: '#FFFFFF'
    },
    emptyList:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

})

export default styles;