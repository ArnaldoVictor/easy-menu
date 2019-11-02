import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, StatusBar, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import whiteArrow from '../../assets/images/white-arrow.png';

export default (props) => {
    const [check, setCheck] = useState(false);
    const item = props.navigation.state.params;


    // {
    //     "desc": "teste",
    //     "key": "-LsYgYosPndDBEy0TT58", 
    //     "name": "teste", 
    //     "price": "R$98", 
    //     "url": "https://firebasestorage.googleapis.com/v0/b/easy-menu-6b476.appspot.com/o/images%2Fteste.jpg?alt=media&token=fbf1f698-a76a-4bb9-b05c-7215fed7d011"
    // }

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

            <Image style={styles.productImage} source={{uri:item.url}} />        
        </View>

        {/* Description */}
        <View style={styles.containerDesc}>
            <View style={styles.productDesc}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.desc}>{item.desc}</Text>

                
                {/* Items */}
                <View style={styles.containerItems}>
                    <Text style={styles.title}>Itens</Text>
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
                
                {/* Comments */}
                <View>
                    <Text style={[styles.title, {marginBottom:10}]}>Observações</Text>
                    <View style={styles.containerComments}>
                        <TextInput 
                            style={styles.comments}
                            multiline={true}
                            numberOfLines={32}
                        />
                    </View>
                </View>

                {/* Amount */}
                <View style={styles.amount}>
                    <Text style={styles.title}>Quantidade</Text>
                    <View style={[styles.amount, {justifyContent:'center'}]}>
                        <TouchableOpacity>
                            <Text style={styles.title}> {' < '} </Text>
                        </TouchableOpacity>
                        <Text style={styles.title}>1</Text>
                        <TouchableOpacity>
                            <Text style={styles.title}> {' > '} </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Total */}
                <View style={styles.priceArea}>
                    <Text style={styles.total}>Total:</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>


                {/* Button */}
                <View style={styles.ButtonArea}>
                    <TouchableOpacity style={styles.order}>
                        <Text style={styles.TBtn}>Fazer Pedido</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    </ScrollView>
    );
}
