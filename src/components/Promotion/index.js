import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default (props) => {
  return (
    <View style={{marginLeft:20}}>
      <TouchableOpacity >
        <Image style={styles.promotionImage} source={require('../../assets/images/picanha-grelhada.jpg')}  />
      </TouchableOpacity>
    </View>
  );
}
