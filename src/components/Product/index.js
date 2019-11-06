import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default (props) => {
    return (
        <View style={props.last === 1 ? styles.last : styles.container}>
            <Image style={styles.productImage} resizeMode='stretch' source={{uri:props.url}}/>
            <View>
                <Text style={styles.productName}>{props.name}</Text>
                <Text style={props.descStyle !== 1 ? styles.productDesc : styles.addPromotionProductDesc} numberOfLines={1}>{props.desc}</Text>
                <Text style={styles.productPrice}>{props.price}</Text>
            </View>
        </View>
    );
}
