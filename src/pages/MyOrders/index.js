import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, ScrollView, Text, TouchableOpacity, Image, BackHandler } from 'react-native';
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
    const listener = props.navigation.addListener('didFocus', refresh);

    function refresh(){

        if(key !== '')
            getProducts();
        
        listener.remove()

    }

    function loadProducts(snapshot){
        let list = [];
        let extraItemList = [];
        let newTotal = 'R$0,00';

        snapshot.forEach((product)=>{

            if(product.child('extraItems/0') !== null){
                product.child('extraItems/0').forEach((item)=>{
                    extraItemList.push({
                        name:item.child('name').val(),
                        price:item.child('price').val(),
                        qtd:item.child('qtd').val()
                    })
                })
            }

            if(product.child('products/0').val() !== null){
                list.push({
                    key:product.key,
                    name:product.child('products/0/name').val(),
                    price:product.child('products/0/price').val(),
                    url:product.child('products/0/url').val(),
                    desc:product.child('products/0/desc').val(),
                    qtd:product.child('qtd').val()
                });
            }

        })
        setAddress(snapshot.child('address').val())

        if(extraItemList.length >0){
            extraItemList = Object.values(
                extraItemList.reduce((list, item) => {
                    newTotal = 'R$'+(Mask.maskTotal(newTotal)+Mask.maskTotal(item.price)).toFixed(2).replace('.', ',');
                    if(list[item.name]){
                        list[item.name].price = 'R$'+(Mask.maskTotal(item.price)+Mask.maskTotal(list[item.name].price)).toFixed(2).replace('.', ',');
                        list[item.name].qtd += 1;
    
                    }else{
                        list[item.name] = item;
                    }      
    
                    return list
                }, {}))
        }
        
        list = Object.values(
            list.reduce((list, item) => {
                if(list[item.name]){
                    list[item.name].price = 'R$'+(Mask.maskTotal(item.price)+Mask.maskTotal(list[item.name].price)).toFixed(2).replace('.', ',');
                    list[item.name].qtd += 1;
                }else{
                    list[item.name] = item;
                    list[item.name].price = 'R$'+(Mask.maskTotal(item.price)*list[item.name].qtd).toFixed(2).replace('.', ',')
                }
                newTotal = 'R$'+(Mask.maskTotal(newTotal)+Mask.maskTotal(item.price)).toFixed(2).replace('.', ',');

                return list
            }, {}))

        setExtraItems(extraItemList)
        setTotal(newTotal)
        setProducts(list)

    }

    async function getProducts(){
        const ref = Easy.getOrderProducts(key);
        await ref.on('value', loadProducts)
    }

    useEffect(()=>{
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

        function handleBackPress(){
            props.navigation.navigate('Home', {order:products.length > 0 ? 'YES' : 'NO'})

            backHandler.remove();
            return true;
        }

    }, []) 

    function renderProductList(){
        return products.map((item, key)=>(
            <Product qtd={item.qtd} key={key} order={1} name={item.name} desc={item.desc} price={item.price} url={item.url} last={products.length -1 === key && 1}/>
        ))

    }

    function renderExtraItems(){
        return extraItems.map((item, key)=>(
            <Extra qtd={item.qtd} key={key} order={1} name={item.name}  price={item.price} />
        ))
    }

    if(products.length === 0){
        return (
        <React.Fragment>
                
                <View style={styles.header}>
                    <TouchableOpacity style={styles.goBack} onPress={()=>props.navigation.navigate('Home')}>
                        <Icon name='arrow-left' color='rgba(0, 0, 0, 0.7)' size={32}/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Meus Pedidos</Text>
                </View>
                <View style={styles.emptyList}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Nenhum Pedido Feito Ainda!</Text>
                </View>

        </React.Fragment>

        )
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.goBack} onPress={()=>props.navigation.goBack()}>
                    <Icon name='arrow-left' color='rgba(0, 0, 0, 0.7)' size={32}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Meus Pedidos</Text>
            </View>

            {/* ORDER */}
            <View style={styles.headerOrder}>
                <Image style={styles.orderStatus} source={require('../../assets/images/meal.png')}/>
                <Text style={styles.address}>{address}</Text>
            </View>

            {/* PRODUCTS */}
            <ScrollView
                nestedScrollEnabled={true}
                style={styles.productList}
            >
                {products.length > 0 && renderProductList()}
            </ScrollView>

            {/* EXTRA ITEMS */}
            <ScrollView
                nestedScrollEnabled={true}
            >
                {extraItems.length > 0 && 
                    <Text style={styles.addTitle}>Adicionais</Text>
                }
                    <View style={styles.extraItemArea}>
                        {extraItems.length > 0 && renderExtraItems()}
                    </View>
                

                {/* Total */}
                <View style={styles.priceArea}>
                    <Text style={styles.total}>Total:</Text>
                    <Text style={styles.price}>
                        {total}
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
