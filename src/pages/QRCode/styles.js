import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    Container:{
        flex:1
    },
    BackButton:{
        zIndex:99,
        margin:20,
        width:32,
        height:28
    },
    BackImage:{
        width:32,
        height:28
    },
    QRMask:{
        ...StyleSheet.absoluteFill,
         alignItems:'center',
         justifyContent:'center',
         zIndex:1
    },
    QRArea:{
        width:width/2,
        height:width/2
    },
    DivArea:{
        flex:1,
        flexDirection:'row'
    },
    leftTop:{
        flex:1,
        borderLeftWidth:2,
        borderTopWidth:2,
        borderColor:'#00FF00'
    },
    rightTop:{
        flex:1,
        borderRightWidth:2,
        borderTopWidth:2,
        borderColor:'#00FF00'
    },
    leftBottom:{
        flex:1,
        borderLeftWidth:2,
        borderBottomWidth:2,
        borderColor:'#00FF00'
    },
    rightBottom:{
        flex:1,
        borderRightWidth:2,
        borderBottomWidth:2,
        borderColor:'#00FF00'
    }
});

export default styles;