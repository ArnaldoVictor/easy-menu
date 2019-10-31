import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import styles from './styles';
import Easy from '../../services/firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemMenu from '../../components/Item-Menu/index';
import Promotion from '../../components/Promotion/index';


export default (props) => {
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  function onRefresh(){
    setRefreshing(true);
    const ref = Easy.getProducts();
    ref.once('value', loadLists);

    setTimeout(()=>setRefreshing(false), 2000);
  }

  function loadLists(snapshot){
    const list = [];

    snapshot.forEach((product)=>{
      list.push({
        key:product.key,
        name:product.val().name,
        price:product.val().price,
        url:product.val().urlImage,
        desc:product.val().desc
      });
    });
    setProducts(list);

  }

  useEffect(()=>{

    const ref = Easy.getProducts();
    ref.once('value', loadLists);
    setLoading(false);

  });

  if(loading){
    return (
      <View style={styles.loading}>
        <ActivityIndicator size='large' color='#0000FF' />
      </View>
    )
  }

  return (
    <React.Fragment>
      
      <View style={styles.containerHeader}>

        <TouchableOpacity onPress={()=>props.navigation.toggleDrawer()}>
          <Icon name='navicon' size={26} style={styles.navIcon}/>
        </TouchableOpacity>

        <TextInput 
          style={styles.inputSearch}
          placeholder='Pesquisar...'
          placeholderTextColor='#6A6A6A'
          placeholderStyle={{color:'rgba(106, 106, 106, 0.65)'}}
        />

        <TouchableOpacity>
          <Icon name='search' size={20} style={styles.searchIcon}/>
        </TouchableOpacity>
        
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl colors={['#1976d2']}refreshing={refreshing} onRefresh={onRefresh} />}
      >    
        <View style={{marginBottom:30}}>
          <Text style={styles.titleSection}>Promoções</Text>
          <FlatList 
            horizontal={true}
            data={products}
            renderItem={({item})=><Promotion />}
            keyExtractor={(item)=> item.key}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{marginBottom:30}}>
          <Text style={styles.titleSection}>Categorias</Text>
          <FlatList 
            horizontal={true}
            data={products}
            renderItem={({item})=><ItemMenu url={item.url} name={item.name} price={item.price} desc/>}
            keyExtractor={(item)=> item.key}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{marginBottom:30}}>
          <Text style={styles.titleSection}>Populares</Text>
          <FlatList 
            horizontal={true}
            data={products}
            renderItem={({item})=><ItemMenu url={item.url} name={item.name} price={item.price}/>}
            keyExtractor={(item)=> item.key}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{marginBottom:30}}>
          <Text style={styles.titleSection}>Recomendamos</Text>
          <FlatList 
            horizontal={true}
            data={products}
            renderItem={({item})=><ItemMenu url={item.url} name={item.name} price={item.price} />}
            keyExtractor={(item)=> item.key}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
          />
        </View>

      </ScrollView>
      
    </React.Fragment>

  );
}
