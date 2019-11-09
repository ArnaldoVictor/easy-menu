import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Product from '../../components/Product/index';
import Extra from '../../components/Extra-Item/index';
import styles from './styles';

export default (props) => {
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.goBack} onPress={()=>props.navigation.goBack()}>
                    <Icon name='arrow-left' color='rgba(0, 0, 0, 0.7)' size={32}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Meus Pedidos</Text>
            </View>
            <View style={styles.headerOrder}>
                <Image style={styles.orderStatus} source={require('../../assets/images/meal.png')}/>
                <Text style={styles.address}>Mesa 1</Text>
            </View>
            <ScrollView
                nestedScrollEnabled={true}
                style={styles.productList}
            >
                <Product order={1} name='Teste' desc='Desc' price='R$20,00' url='https://firebasestorage.googleapis.com/v0/b/easy-menu-6b476.appspot.com/o/images%2FCarne%20Moida.jpg?alt=media&token=08d716f3-c35d-44c2-a00b-15f836c01310'/>
                <Product order={1} name='Teste' desc='Desc' price='R$20,00' url='https://firebasestorage.googleapis.com/v0/b/easy-menu-6b476.appspot.com/o/images%2FCarne%20Moida.jpg?alt=media&token=08d716f3-c35d-44c2-a00b-15f836c01310'/>
                <Product order={1} name='Teste' desc='Desc' price='R$20,00' url='https://firebasestorage.googleapis.com/v0/b/easy-menu-6b476.appspot.com/o/images%2FCarne%20Moida.jpg?alt=media&token=08d716f3-c35d-44c2-a00b-15f836c01310'/>
                <Product order={1} name='Teste' desc='Desc' price='R$20,00' url='https://firebasestorage.googleapis.com/v0/b/easy-menu-6b476.appspot.com/o/images%2FCarne%20Moida.jpg?alt=media&token=08d716f3-c35d-44c2-a00b-15f836c01310'/>
                <Product order={1} name='Teste' desc='Desc' price='R$20,00' url='https://firebasestorage.googleapis.com/v0/b/easy-menu-6b476.appspot.com/o/images%2FCarne%20Moida.jpg?alt=media&token=08d716f3-c35d-44c2-a00b-15f836c01310'/>
                <Product last={1} order={1} name='Teste' desc='Desc' price='R$20,00' url='https://firebasestorage.googleapis.com/v0/b/easy-menu-6b476.appspot.com/o/images%2FCarne%20Moida.jpg?alt=media&token=08d716f3-c35d-44c2-a00b-15f836c01310'/>

            </ScrollView>
            <ScrollView
                nestedScrollEnabled={true}
            >
                <Text style={styles.addTitle}>Adicionais</Text>
                <View style={styles.extraItemArea}>
                    <Extra key={1} name='Teste Extra' price='R$2,00'/>
                    <Extra key={2} name='Teste Extra' price='R$3,00'/>
                    <Extra key={3} name='Teste Extra' price='R$1,00'/>
                    <Extra key={4} name='Teste Extra' price='R$5,00'/>
                    <Extra key={5} name='Teste Extra' price='R$6,00'/>
                </View>

                {/* Total */}
                <View style={styles.priceArea}>
                    <Text style={styles.total}>Total:</Text>
                    <Text style={styles.price}>
                        R$100,00
                    </Text>
                </View>

                {/* Button Finish Order */}
                <TouchableOpacity style={styles.bill}>
                    <Text style={styles.TBtn}>Fechar a Conta</Text>
                </TouchableOpacity>
            </ScrollView>
        </ScrollView>
    );
}
