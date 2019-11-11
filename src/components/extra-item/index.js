import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

export default (props) => {
    const [check, setCheck] = useState(false);
    const dispatch = useDispatch();

    function addExtraItem(){
        if(check){
            dispatch({type:'REMOVE_ITEM', item:{name:props.name, price:props.price, qtd:1 } });
        }else{
            dispatch({ type:'ADD_ITEM', item:{ name:props.name, price:props.price, qtd:1} });
        }
        setCheck(!check);

    }

    return (

        <View style={styles.checkBoxArea}>

            {props.order !== 1 && <CheckBox onChange={addExtraItem} value={check}/>}
            <View style={styles.priceArea}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.item}>{props.name}</Text>
                    {props.qtd && <Text style={styles.amount}>{props.qtd > 1 && ' x'+props.qtd}</Text>}
                </View>
                <Text style={styles.priceText}>{props.price}</Text>
            </View>
        </View>

    );

}
