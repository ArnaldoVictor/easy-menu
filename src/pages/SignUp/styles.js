import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    TextTop:{
        width:280,
        marginTop:30
    },
    TextHeader:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 28,
    },
    TextDesc:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 16,
        color: '#AAAAAA'
    },
    LogoContainer:{
        height:133,
        width:width,
        alignItems:'center',
        marginTop:20
    },
    Logo:{
        flex:1,
        width:123,
        height:123,
        marginBottom:10
    },
    FormData:{
        flex:1,
        marginTop:20,
        alignItems:'center'
    },
    Input:{
        width: 280,
        height: 40,
        backgroundColor: 'rgba(196, 196, 196, 0.42)',
        borderRadius: 20,
        paddingHorizontal: 15
    },
    CheckBoxArea:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
    },
    ButtonArea:{
        flex:1,
        marginTop:20,
        alignItems:'center'
    },
    SignUp:{
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
    Back:{
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
    error:{
        fontSize:12,
        lineHeight:18,
        color:'#B33A3A',
        fontWeight:'bold',
        marginBottom:5
    }
    
});

export default styles;