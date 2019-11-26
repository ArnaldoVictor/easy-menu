import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Product from '../../components/Product/index';
import Easy from '../../services/firebase';
import styles from './styles';

export default (props) => {
    const [products, setProducts] = useState([]);
    const [productsLength, setProductsLength] = useState(undefined);
    const listener = props.navigation.addListener('didBlur', refresh);

    function refresh(){
        setProductsLength(undefined);
        listener.remove();
    }

    async function loadProducts(snapshot){
        const list = [];

        await snapshot.forEach((product)=>{
            list.push({
                key:product.key,
                name:product.val().name,
                desc:product.val().desc,
                price:product.val().price,
                items:product.val().items,
                imageUrl:product.val().imageUrl
            })
        });
        setProducts(list);
        list.length < 1 && setProductsLength(0);
    }

    useEffect(()=>{
        setProducts([])
    
        const ref = Easy.getProducts();
        ref.once('value', loadProducts);
      
    }, []);


    function renderProducts(){
        return products.map((item, key)=>(
            <TouchableOpacity key={key} style={styles.productButton} onPress={()=>props.navigation.navigate('Product', {item, direct:0})}>
                <Product edit={1} name={item.name} desc={item.desc} price={item.price} url={item.imageUrl} last={products.length - 1 === key && 1}/>
            </TouchableOpacity>

        ));
    }

    if(productsLength === 0){
        return (
        <View style={styles.scrollContainer}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.goBack} onPress={()=>props.navigation.goBack()}>
                    <Icon name='arrow-left' color='rgba(0, 0, 0, 0.7)' size={32}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{headerTitle}</Text>
            </View>
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyList}>Nenhum produto encontrado!</Text>
            </View>

        </View>)
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.goBack} onPress={()=>props.navigation.goBack()}>
                    <Icon name='arrow-left' color='rgba(0, 0, 0, 0.7)' size={32}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Produtos</Text>
            </View>
            <View style={styles.container}>
                {products.length > 0 && renderProducts()}
            </View>

        </ScrollView>
    );
}
