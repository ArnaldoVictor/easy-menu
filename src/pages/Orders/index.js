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

    function loadProducts(snapshot){
        let list = [];
        let extraItemList = [];
        let newTotal = 'R$0,00';
        // let tempList = [];

        snapshot.forEach((order)=>{
            let address = order.child('address').val();

            // if(tempList.length === 0){
            //     tempList.push({ [address]:[] });
            // }
            // console.log(tempList[0][address]);

            order.forEach(childItem =>{
                
                if(childItem.child('extraItems/0') !== null){
                    childItem.child('extraItems/0').forEach((item)=>{
                        extraItemList.push({
                            name:item.child('name').val(),
                            price:item.child('price').val(),
                            qtd:item.child('qtd').val()
                        })
                    })
                }
            
                if(childItem.child('products/0/name').val() !== null){
                    list.push({
                        key:childItem.key,
                        name:childItem.child('products/0/name').val(),
                        price:childItem.child('products/0/price').val(),
                        imageUrl:childItem.child('products/0/imageUrl').val(),
                        desc:childItem.child('products/0/desc').val(),
                        qtd:childItem.child('qtd').val()
                    });
                }

            })
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

    
    useEffect(()=>{
        
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        
        async function getProducts(){
            const ref = Easy.getAllOrderProducts();
            await ref.on('value', loadProducts)
        }

        function handleBackPress(){
            props.navigation.navigate('Home', {order:products.length > 0 ? 'YES' : 'NO'})

            backHandler.remove();
            return true;
        }

        getProducts();

    }, []) 

    function renderProductList(){
        return products.map((item, key)=>(
            <Product qtd={item.qtd} key={key} order={1} name={item.name} desc={item.desc} price={item.price} url={item.imageUrl} last={products.length -1 === key && 1}/>
        ))

    }

    function renderExtraItems(){
        return extraItems.map((item, key)=>(
            <Extra qtd={item.qtd} key={key} order={1} name={item.name}  price={item.price} />
        ))
    }

    if(products.length === 0){
        return (
        <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
                
                <View style={styles.header}>
                    <TouchableOpacity style={styles.goBack} onPress={()=>props.navigation.navigate('Home')}>
                        <Icon name='arrow-left' color='rgba(0, 0, 0, 0.7)' size={32}/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Pedidos</Text>
                </View>
                <View style={styles.emptyList}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Nenhum Pedido Feito Ainda!</Text>
                </View>

        </View>

        )
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.goBack} onPress={()=>props.navigation.goBack()}>
                    <Icon name='arrow-left' color='rgba(0, 0, 0, 0.7)' size={32}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Pedidos</Text>
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

            </ScrollView>
        </ScrollView>
    );
}
