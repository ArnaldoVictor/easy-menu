import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    backButton:{
        zIndex:99,
        width:32,
        height:28,
        marginTop:30,
        marginLeft:20
    },
    backImage:{
        width:32,
        height:28
    },
    addImage:{
        fontSize:84,
        color:'#C4C4C4'
    },
    uploadArea:{
        width:width,
        justifyContent:'center',
        alignItems:'center'
    },
    btnAddImage:{
        width:50,
        height:98
    },
    uploadBox:{
        width:width,
        height:235,
        borderBottomWidth:0.2,
    },
    newProduct:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    registerProduct:{
        marginTop:20,
        marginBottom:20,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 28,
        width:width-100
    },
    input:{
        width: width-100,
        height: 40,
        backgroundColor: 'rgba(196, 196, 196, 0.42)',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom:20
    },
    placeholderDesc:{
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    addItemArea:{
        flex:1,
        borderWidth:0.2,
        borderColor:'#6A6A6A',
        width:width-100,
        marginTop:20,
        padding:10,
        backgroundColor:'#FFFFFF'
    },
    itemPriceArea:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemPrice:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 23,
        color:'#3DD6B5'
    },
    removeArea:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    btnAddItem:{
        width: 54,
        height: 40,
        backgroundColor:'#3B5998',
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    addItem:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 28,
        color:'#FFFFFF',
    },
    registerBtn:{
        marginTop:20,
        backgroundColor: '#3B5998',
        width: width-100,
        height: 50,
        borderRadius: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 4,
        marginBottom:30,
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
    itemText:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 23,
        textAlign: 'center',
        color:'#6A6A6A'
    },
    itemArea:{
        flexDirection:'row',
        marginBottom:10,
        justifyContent:'space-between',
        width:width-120
    },
    removeItem:{
        fontSize:16,
        marginLeft:10,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 23,
        color:'#B33A3A'
    },
    foto:{
        width:width,
        height:237,
        marginTop:-30
    },
    section:{
        padding:10,
        width:width-120,
        height:30,
        borderBottomWidth:0.3,
        borderBottomColor:'#6A6A6A',
        justifyContent:'center',
        alignItems:'center'
    },
    textSection:{
        fontSize:16,
        fontWeight:'bold',
        fontFamily:'Roboto'
    },
    recommendArea:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center'
    }
});

export default styles;