import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default (props) => {
  
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={props.onPress}>
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
