import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    containerHeader:{
        marginTop:20,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20

    },
    navIcon:{
        marginRight:30
    },
    searchIcon:{
        zIndex:99,
        marginLeft:-30,
        lineHeight:20
    },
    inputSearch:{
        width:width - 92,
        borderWidth:0.4,
        borderColor:'#6A6A6A',
        padding:0,
        height:30,
        paddingHorizontal:15,
        borderRadius:10,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 19
    },
    titleSection:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 23,
        marginLeft:20,
        marginBottom:20
    },
    list:{
        width:width
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default styles;