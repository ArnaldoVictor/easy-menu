import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import styles from './styles';

export default (props) => {
    const width = Dimensions.get('screen').width;

    return (
        <View style={props.last === 1 ? styles.last : props.order === 1 ? [styles.container, {width:width-40}] : styles.container}>
            <Image style={styles.productImage} resizeMode='stretch' source={{uri:props.url}}/>
            <View>
                <View style={{flexDirection:'row', width:width-120,}}>
                    <Text style={styles.productName}>{props.name}</Text>
                    <Text style={styles.amount}>{props.qtd && props.qtd > 1 && ' x'+props.qtd}</Text>
                </View>
                <Text style={props.descStyle !== 1 ? styles.productDesc : styles.addPromotionProductDesc} numberOfLines={1}>{props.desc}</Text>
                <Text style={styles.productPrice}>{props.price}</Text>
            </View>
        </View>
    );
}
