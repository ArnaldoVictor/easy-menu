import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    containerHeader:{
        margin:20,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',


    },
    searchArea:{
        alignItems:'center'
    },
    navIcon:{
        marginRight:30,
    },
    searchIcon:{
        flex:1,
        zIndex:99,
        lineHeight:20,
        marginLeft:width-130,
        marginTop:-26,
    },
    inputSearch:{
        width:width - 92,
        borderWidth:0.4,
        borderColor:'#6A6A6A',
        padding:0,
        paddingRight:40,
        paddingLeft:15,
        height:30,
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