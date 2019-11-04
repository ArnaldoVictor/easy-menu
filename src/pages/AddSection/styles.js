import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    h1:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 28,
        lineHeight: 33,
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
        width:200,
        height:200,
        borderRadius:20,
        backgroundColor:'#C4C4C4',
        justifyContent:'center',
        alignItems:'center'

    }

});

export default styles;