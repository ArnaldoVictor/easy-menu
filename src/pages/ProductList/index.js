import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Product from '../../components/Product/index';
import Easy from '../../services/firebase';
import styles from './styles';

export default (props) => {
    const [products, setProducts] = useState([]);
    const [headerTitle, setHeaderTitle] = useState('');
    const obj = props.navigation.state.params;

    async function loadProducts(snapshot){
        const list = [];

        await snapshot.forEach((product)=>{
            list.push({
                key:product.key,
                name:product.val().name,
                desc:product.val().desc,
                price:product.val().price,
                items:product.val().items,
                url:product.val().imageUrl
            })
        });
        setProducts(list);
    }

    useEffect(()=>{
        setProducts([])
        setHeaderTitle('');
        
        function loadPromotionProducts(items){
            const list = [];
            const productList = Object.values(items);
    
            productList.map(item => {
                list.push({
                    key:item.key,
                    name:item.name,
                    desc:item.desc,
                    url:item.imageUrl,
                    price:item.price,
                    items:item.items
                })
            })
            setProducts(list);
        }


        if(obj.type === 'section'){
            const ref = Easy.getProducts().orderByChild(obj.type).equalTo(obj.name);
            ref.once('value', loadProducts);
        }else{
            loadPromotionProducts(obj.promotionItems)
        }
        setHeaderTitle(obj.name);
        
        
    }, [obj]);


    function renderProducts(){
        return products.map((item, key)=>(
            <TouchableOpacity key={key} style={styles.productButton} onPress={()=>props.navigation.navigate('Product', {item, direct:0})}>
                <Product name={item.name} desc={item.desc} price={item.price} url={item.url}/>
            </TouchableOpacity>

        ));
    }

  return (
    <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.goBack} onPress={()=>props.navigation.goBack()}>
                <Icon name='arrow-left' color='rgba(0, 0, 0, 0.7)' size={32}/>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{headerTitle}</Text>
        </View>
        <View style={styles.container}>
            {products.length > 0 && renderProducts()}
        </View>

    </ScrollView>
  );
}
