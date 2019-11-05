import React, { useState } from './node_modules/react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from './node_modules/react-redux';
import CheckBox from './node_modules/@react-native-community/checkbox';
import styles from './styles';

export default (props) => {
    const [check, setCheck] = useState(false);
    const items = useSelector(state => state.items);
    const dispatch = useDispatch();

    function addExtraItem(){
        if(check){
            dispatch({type:'REMOVE_ITEM', item:{name:props.name, price:props.price } });
        }else{
            dispatch({ type:'ADD_ITEM', item:{ name:props.name, price:props.price } });
        }
        setCheck(!check);

    }

    return (

        <View style={styles.checkBoxArea}>
            <CheckBox onChange={addExtraItem} value={check}/>
            <View style={styles.priceArea}>
                <Text style={styles.item}>{props.name}</Text>
                <Text style={styles.priceText}>{props.price}</Text>
            </View>
        </View>

    );

}
