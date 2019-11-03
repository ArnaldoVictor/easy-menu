import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, StatusBar, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import Extra from '../../components/extra-item/index';
import Mask from '../../common/textMask';
import whiteArrow from '../../assets/images/white-arrow.png';

export default (props) => {
    const item = props.navigation.state.params;
    const [total, setTotal] = useState({qtd:1, value:item.price});
    const totalState = useSelector(state => state.extra.total);
    const dispatch = useDispatch();

    function loadItems(){
       return item.items.map((value, key)=>(
                <Extra key={item.key+value.name} name={value.name} price={value.price}/>
            )
       )
    }
    useEffect(()=>{
        setTotal({qtd:1, value:item.price});
    }, [item]);


    function addQTD(){
        let qtd = total.qtd+ 1;
        let value = (Mask.maskTotal(item.price) * qtd).toFixed(2);
        value = value.replace('.', ',');
        setTotal({qtd, value:'R$'+value});
        return total.qtd;
    }

    function minusQTD(){
        if(total.qtd > 1){
            let qtd = total.qtd - 1;
            let value = (Mask.maskTotal(item.price)*qtd).toFixed(2);
            value = value.replace('.', ',');
            setTotal({qtd, value:'R$'+value});
        }
        return total.qtd;
    }

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
                 <Text style={styles.title}>Adicionais</Text>
                    {loadItems()}
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
                        <TouchableOpacity onPress={minusQTD}>
                            <Text style={styles.title}> {' < '} </Text>
                        </TouchableOpacity>
                        <Text style={styles.title}>{total.qtd}</Text>
                        <TouchableOpacity onPress={addQTD}>
                            <Text style={styles.title}> {' > '} </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Total */}
                <View style={styles.priceArea}>
                    <Text style={styles.total}>Total:</Text>
                    <Text style={styles.price}>
                        {total.value}
                    </Text>
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