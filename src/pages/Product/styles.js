import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    containerDesc:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },

    productDesc:{
        width:width-40
    },
    containerHeader:{
        margin:20
    },
    goBack:{
        position:'relative',
        width:32,
        height:28,
        zIndex:99
    },
    backBtn:{
        position:'relative',
        width:32,
        height:28,
        zIndex:99
        
    },
    productImage:{
        width:width,
        height:235,
        marginTop:-68,
        zIndex:0

    },
    productName:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 23,
        marginBottom:5
    },
    desc:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 23,
        color:'#6A6A6A',
        marginBottom:10

    },
    priceArea:{
        borderTopWidth:0.4,
        borderColor:'#6A6A6A',
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
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
    ButtonArea:{
        flex:1,
        marginTop:20,
        alignItems:'center'
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
    obs:{
        width: width-40,
        height: 50,
        borderRadius: 25,
        backgroundColor:'#3B5998',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        marginBottom:10,
        justifyContent:'center'
    },
    order:{
        width: width-40,
        height: 50,
        backgroundColor: '#D82A26',
        borderRadius: 25,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        marginBottom:20,
        justifyContent:'center'
    },
    containerItems:{
        marginBottom:20
    },
    itemsTitle:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 23,
        marginBottom:5
    },
    checkBoxArea:{
        flexDirection:'row',
        padding:0
    },
    item:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30,
        color:'#6A6A6A'
    }

});
export default styles;