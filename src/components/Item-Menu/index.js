import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default (props) => {
  const [margin, setMargin] = useState(-65);


  useEffect(()=>{
    if(props.name.length > 14){
      setMargin(-80)
    }else{
      setMargin(-65)
    }
  }, [props.name]);
  

  
  return (
    <View style={props.style ? {marginLeft:0} : styles.item}>
      <TouchableOpacity onPress={props.onPress}>
          <Image style={styles.itemImage} resizeMode='cover' source={{uri:props.url}}/> 
          <LinearGradient 
            style={styles.gradient} 
            colors={['rgba(255, 255, 255, 0.1)', 'rgba(0, 0, 0, 0.7)']}
          />
          <View>
            <Text numberOfLines={props.style && 2} style={props.style ? [styles.sectionName, {marginTop:margin}] : styles.productName}>{props.name}</Text>
            {props.style !== true && <Text style={styles.productPrice}>{props.price}</Text>}
          </View>
        </TouchableOpacity>
    </View>
  );
}
