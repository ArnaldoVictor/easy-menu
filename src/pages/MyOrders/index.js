import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import Easy from '../../services/firebase';
import Mask from '../../common/textMask';
import Product from '../../components/Product/index';
import Extra from '../../components/Extra-Item/index';

export default (props) => {
    const key = useSelector(state=>state.order.key);
    const [products, setProducts] = useState([]);
    const [extraItems, setExtraItems] = useState([]);
    const [total, setTotal] = useState([]);
    const [address, setAddress] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    function loadProducts(snapshot){
        const list = [];
        let extraItemList = [];

        snapshot.forEach((product)=>{

            product.child('extraItems/0').forEach((item)=>{
                extraItemList.push({
                    name:item.child('name').val(),
                    price:item.child('price').val()
                })
            })

            list.push({
                key:product.key,
                name:product.child('products/0/name').val(),
                price:product.child('products/0/price').val(),
                url:product.child('products/0/url').val(),
                desc:product.child('products/0/desc').val(),
                items:product.child('products/0/items').val()
            });

        })
        setAddress(snapshot.child('address').val())
        
        list.pop();
        extraItemList = Object.values(
            extraItemList.reduce((list, item) => {
              if(list[item.name]) 
                list[item.name].price = 'R$'+(Mask.maskTotal(item.price)+Mask.maskTotal(list[item.name].price)).toFixed(2).replace('.', ',');
              else 
                list[item.name] = item;
            
              return list
            }, {}))
        setExtraItems(extraItemList)

        setProducts(list);

    }


    useEffect(()=>{
        async function getProducts(){
            const ref = Easy.getOrderProducts(key);
            await ref.on('value', loadProducts)
        }

        getProducts();

    }, [refreshing])

    function renderProductList(){
        return products.map((item, key)=>(
            <Product key={key} order={1} name={item.name} desc={item.desc} price={item.price} url={item.url} last={products.length -1 === key && 1}/>
        ))

    }

    function renderExtraItems(){

        
        return extraItems.map((item, key)=>(
            <Extra key={key} order={1} name={item.name}  price={item.price} />
        ))
    }

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
                <Text style={styles.address}>{address}</Text>
            </View>
            <ScrollView
                nestedScrollEnabled={true}
                style={styles.productList}
            >
                {products.length > 0 && renderProductList()}
            </ScrollView>
            <ScrollView
                nestedScrollEnabled={true}
            >
                <Text style={styles.addTitle}>Adicionais</Text>
                <View style={styles.extraItemArea}>
                    {extraItems.length > 0 && renderExtraItems()}
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
