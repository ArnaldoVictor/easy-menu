import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import whiteArrow from '../../assets/images/white-arrow.png';
import parmegiana from '../../assets/images/parmegiana.jpg';

export default (props) => {
    const [check, setCheck] = useState(false);

    return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar hidden={true}/>
        {/* Header */}
        <View>
            <View style={styles.containerHeader}>
                <TouchableOpacity style={styles.backBtn} onPress={()=>props.navigation.goBack()}>
                    <Image style={styles.goBack} source={whiteArrow}/>
                </TouchableOpacity>
            </View>

            <Image style={styles.productImage} source={parmegiana} />        
        </View>

        {/* Description */}
        <View style={styles.containerDesc}>
            <View style={styles.productDesc}>
                <Text style={styles.productName}>Filé a Parmegiana</Text>
                <Text style={styles.desc}>400g de filé mignon à milanesa, gratinados com queijo mussarela e molho de tomate. Servido com espaguete no próprio molho.</Text>

                
                {/* Items */}
                <View style={styles.containerItems}>
                    <Text style={styles.itemsTitle}>Itens</Text>
                    <View style={styles.checkBoxArea}>
                        <CheckBox onChange={()=>setCheck(!check)} value={check}/>
                        <Text style={styles.item}>Item 1</Text>
                    </View>
                    <View style={styles.checkBoxArea}>
                        <CheckBox onChange={()=>setCheck(!check)} value={check}/>
                        <Text style={styles.item}>Item 2</Text>
                    </View>
                    <View style={styles.checkBoxArea}>
                        <CheckBox onChange={()=>setCheck(!check)} value={check}/>
                        <Text style={styles.item}>Item 3</Text>
                    </View>
                    <View style={styles.checkBoxArea}>
                        <CheckBox onChange={()=>setCheck(!check)} value={check}/>
                        <Text style={styles.item}>Item 4</Text>
                    </View>
                </View>

                {/* Total */}
                <View style={styles.priceArea}>
                    <Text style={styles.total}>Total:</Text>
                    <Text style={styles.price}>R$65,00</Text>
                </View>


                {/* Buttons */}
                <View style={styles.ButtonArea}>
                    <TouchableOpacity style={styles.obs}>
                        <Text style={styles.TBtn}>Adicionar Observação</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.order}>
                        <Text style={styles.TBtn}>Fazer Pedido</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    </ScrollView>
    );
}
