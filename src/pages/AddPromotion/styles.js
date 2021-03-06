import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    scrollContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    h1:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom:10
    },
    h3:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 28,
        color: '#6A6A6A',
        marginBottom:10
    },
    input:{
        width: width-40,
        height: 40,
        backgroundColor: 'rgba(196, 196, 196, 0.42)',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom:10
    },
    addSection:{
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
    goBack:{
        width: width-40,
        height: 50,
        borderRadius: 25,
        backgroundColor:'#D82A26',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        marginBottom:10,
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
    selectImage:{
        fontSize:84,
        marginTop:-20,
        color:'#DDDDDD'
    },
    pictureContainer:{
        width:300,
        height:150,
        borderRadius:20,
        backgroundColor:'#C4C4C4',
        justifyContent:'center',
        alignItems:'center'

    },
    image:{
        width:300,
        height:150,
        marginTop:-40,
        borderRadius:20
    },
    sectionName:{
        position:'relative',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        zIndex:99,
        color:'#FFF',
        marginTop:-65,
        marginLeft:10,
        width:170,
        zIndex:2
    },
    pictureActive:{
        width:300,
        height:150,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent'
    },
    gradient:{
        position:'relative',
        width:200,
        height:200,
        borderRadius:20,
        zIndex:1
    },
    productHeaderArea:{
        width:width-60,
        flexDirection:'row',
        marginBottom:10,
        alignItems:'center',
        justifyContent:'space-between'
    },
    productList:{
        width:width-50,
        height:270,
        borderRadius:20,
        backgroundColor:'rgba(196,196,196, 0.3)',
        padding:10,
        marginBottom:20
    },
    productText:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight:30

    },
    addBtn:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#3B5998',
        margin:10
    },
    modalHeader:{
        flexDirection:'row',
        justifyContent:'space-between'

    },  
    modalTitle:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        margin:10
    }, 
    sectionsContainer:{
        alignItems:'center',
        marginTop:20,
        marginBottom:20
    },
    section:{
        padding:10,
        width:width-40,
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
    }

});

export default styles;