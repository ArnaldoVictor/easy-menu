import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFFFFF'
    },
    Logo:{
        width: 123,
        height: 123
    },
    FormText:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        marginBottom: 2
    },
    textContainer:{
        flexDirection:'row',
        width:280,
        justifyContent:'flex-start'
    },
    Input:{
        width: 280,
        height: 40,
        backgroundColor: 'rgba(196, 196, 196, 0.42)',
        borderRadius: 20,
        marginBottom: 5,
        paddingHorizontal: 15
    },
    TextButtons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 260
    },
    TButton:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 19,
        color:'#3B5998'
    },
    LoginBtn:{
        width: 280,
        height: 50,
        backgroundColor: '#2E2D2B',
        borderRadius: 25,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        marginBottom:10,
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
    QrcodeBtn:{
        backgroundColor: '#3B5998',
        marginTop:0,
        width: 280,
        height: 50,
        borderRadius: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 4,
        marginBottom:10,
        justifyContent:'center'
    }
});

export default styles;