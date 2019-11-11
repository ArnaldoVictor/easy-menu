import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import styles from './styles';

export default (props) => {
    const width = Dimensions.get('screen').width;

    return (
        <View style={props.last === 1 ? styles.last : props.order === 1 ? [styles.container, {width:width-40}] : styles.container}>
            <Image style={styles.productImage} resizeMode='stretch' source={{uri:props.url}}/>
            <View>
                <Text style={styles.productName}>{props.name}{props.qtd && props.qtd}</Text>
                <Text style={props.descStyle !== 1 ? styles.productDesc : styles.addPromotionProductDesc} numberOfLines={1}>{props.desc}</Text>
                <Text style={styles.productPrice}>{props.price}</Text>
            </View>
        </View>
    );
}
