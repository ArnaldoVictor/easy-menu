import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    scrollContainer:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    header:{
        width:width,
        height:60,
        alignItems:'center',
        flexDirection:'row'
    },
    container:{
        marginLeft:10,
        width:width-20,
        overflow:'hidden'
    },
    productButton:{
        width:width-20,
        flexDirection:'row'
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
    goBack:{
        marginLeft:20,
        marginRight:20
    },
    emptyContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    emptyList:{
        fontSize:20,
        fontWeight:'bold'
    }
});

export default styles;