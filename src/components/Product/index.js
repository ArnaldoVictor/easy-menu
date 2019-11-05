import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.productImage} resizeMode='stretch' source={require('../../assets/images/bebida.jpg')}/>
            <View>
                <Text style={styles.productName}>Nome</Text>
                <Text style={styles.productDesc}>Desc</Text>
                <Text style={styles.productPrice}>R$10,00</Text>
            </View>
        </View>
    );
}
