import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Easy from '../../services/firebase';
import styles from './styles';

export default (props) => {
  const item = {
    name:props.name,
    price:props.price,
    desc:props.desc,
    url:props.url
  }

  function navItem(){
    
  }

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={()=>navItem()}>
        <Image style={styles.itemImage} resizeMode='cover' source={{uri:props.url}}/> 
        <View>
          <Text style={styles.productName}>{props.name}</Text>
          <Text style={styles.productPrice}>{props.price}</Text>
        </View>
        <LinearGradient 
          style={styles.gradient} 
          colors={['rgba(255, 255, 255, 0.1)', 'rgba(0, 0, 0, 0.7)']}
        />
      </TouchableOpacity>
    </View>
  );
}
