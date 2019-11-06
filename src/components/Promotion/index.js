import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default (props) => {
  return (
    <View style={props.addPromo !== 1 && {marginLeft:20}}>
      <TouchableOpacity onPress={props.onPress}>
        <Image style={styles.promotionImage} source={{uri:props.url}}  />
      </TouchableOpacity>
    </View>
  );
}
