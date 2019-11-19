import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, StatusBar, TextInput, BackHandler, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import Extra from '../../components/Extra-Item/index';
import Mask from '../../common/textMask';
import whiteArrow from '../../assets/images/white-arrow.png';
import AsyncStorage from '@react-native-community/async-storage';
import store from '../../store/index';

export default (props) => {
    const params = props.navigation.state.params;
    const [total, setTotal] = useState({qtd:1, value:params.item.price});
    const [comment, setComment] = useState(null);
    const totalState = useSelector(state => state.extra.total);
    const items = useSelector(state => state.extra.items);
    const key = useSelector(state => state.order.key);
    const address = useSelector(state => state.order.address);
    const dispatch = useDispatch();


    async function order(){
        let state = await dispatch({type:'ORDER', product:params.item, total:total.value, qtd:total.qtd, observation:comment, items, address});
        if(key === ''){
            let tempKey = ['key', store.getState().order.key];
            let tempAddress = ['address', state.address];
            await AsyncStorage.multiSet([tempKey, tempAddress]);
        }
        Alert.alert('Pedido', 'Pedido feito com sucesso!');
    }

    function loadItems(){
       return params.item.items.map((value)=>(
                <Extra key={params.item.key+value.name} name={value.name} price={value.price}/>
            )
       )
    }

    useEffect(()=>{
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

        function handleBackPress(){
            dispatch({type:'CLEAR_ITEMS', confirm:1})
            if(params.direct === 0){
                props.navigation.navigate('ProductList'); 
            }
            backHandler.remove();
            return true;
        }

    }, []) 
        
    useEffect(()=>{
        setComment('');
        setTotal({qtd:1, value:params.item.price});
        if(totalState !== '0' && totalState !== undefined){
            dispatch({type:'CLEAR_TOTAL', total:'R$0,00'})
        }
    }, [params]);

    useEffect(()=>{
        let qtd = total.qtd;
        let value = (Mask.maskTotal(params.item.price) * qtd)+Mask.maskTotal(totalState);
        value = 'R$'+value.toFixed(2).replace('.', ',');
        setTotal({ qtd, value });
    }, [totalState])

    function addQTD(){
        let qtd = total.qtd + 1;
        let value = ((Mask.maskTotal(params.item.price) * qtd)+Mask.maskTotal(totalState)).toFixed(2);
        value = value.replace('.', ',');
        setTotal({qtd, value:'R$'+value});
        return total.qtd;
    }

    function minusQTD(){
        if(total.qtd > 1){
            let qtd = total.qtd - 1;
            let value = ((Mask.maskTotal(params.item.price)*qtd)+Mask.maskTotal(totalState)).toFixed(2);
            value = value.replace('.', ',');
            setTotal({qtd, value:'R$'+value});
        }
        return total.qtd;
    }

    function goBack(){
        dispatch({type:'CLEAR_ITEMS', confirm:1})
        if(params.direct === 1) {
            props.navigation.goBack()
        }else{
            props.navigation.navigate('ProductList')
        } 
    }

    return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar hidden={true}/>
        {/* Header */}
        <View>
            <View style={styles.containerHeader}>
                <TouchableOpacity style={styles.backBtn} onPress={goBack}>
                    <Image style={styles.goBack} source={whiteArrow}/>
                </TouchableOpacity>
            </View>

            <Image style={styles.productImage} source={{uri:params.item.imageUrl}} />        
        </View>

        {/* Description */}
        <View style={styles.containerDesc}>
            <View style={styles.productDesc}>
                <Text style={styles.title}>{params.item.name}</Text>
                <Text style={styles.desc}>{params.item.desc}</Text>

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
                            value={comment}
                            onChangeText={(text)=>setComment(text)}
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
                    <TouchableOpacity style={styles.order} onPress={order}>
                        <Text style={styles.TBtn}>Fazer Pedido</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    </ScrollView>
    );
}
