import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default (props) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity>
        <Image style={styles.itemImage} resizeMode='cover' source={require('../../assets/images/picanha-grelhada.jpg')}/> 
      </TouchableOpacity>
    </View>
  );
}
