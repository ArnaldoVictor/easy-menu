import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, FlatList, RefreshControl, ActivityIndicator, StatusBar } from 'react-native';
import styles from './styles';
import Easy from '../../services/firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemMenu from '../../components/Item-Menu/index';
import Promotion from '../../components/Promotion/index';

export default (props) => {
  const [products, setProducts] = useState([]);
  const [sections, setSections] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [promotionItems, setPromotionItems] = useState([]);
  const [selectedPromotion, setSelectedPromotion] = useState('');
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);


  function onRefresh(){
    setRefreshing(true);
    setTimeout(()=>setRefreshing(false), 2000);

  }

  useEffect(()=>{

    async function getProducts(){
      const ref = Easy.getProducts();
      await ref.once('value', loadLists);
    }
    
    async function getSections(){
      const ref = Easy.getSectionList();
      await ref.once('value', loadSections);
    }
    
    async function getPromotions(){
      const ref = Easy.getPromotionList();
      await ref.once('value', loadPromotions);
      
    }
    
    getPromotions();
    getSections();
    getProducts();
    setLoading(false);
    
  }, [refreshing]);

  async function getPromotionItems(child){
    const ref = Easy.getPromotionItems(child);
    setSelectedPromotion(child);
    await ref.once('value', loadPromotionItems);
  }
  
  function loadPromotionItems(snapshot){
    const list = [];

    snapshot.forEach(product => {
      list.push({
        key:product.val().key,
        name:product.val().name,
        desc:product.val().desc,
        price:product.val().price,
        imageUrl:product.val().imageUrl,
        items:product.val().items
      })
    });
    setPromotionItems(list);
  }

  useEffect(()=>{
    if(promotionItems.length > 0){
      props.navigation.navigate('ProductList', {type:'promotion', name:selectedPromotion, promotionItems});
    }
  }, [promotionItems])

  function loadPromotions(snapshot){
    const list = [];

    snapshot.forEach((promotion)=>{
      list.push({
        key:promotion.key,
        name:promotion.val().name,
        imageUrl:promotion.val().imageUrl,
        products:promotion.val().products
      });
    })
    setPromotions(list);

  }
  
  function loadLists(snapshot){
    const list = [];
    const recommendedList = [];

    snapshot.forEach((product)=>{
      if(product.val().recommend === 1){
        recommendedList.push({
          key:product.key,
          name:product.val().name,
          price:product.val().price,
          imageUrl:product.val().imageUrl,
          desc:product.val().desc,
          items:product.val().items
        });
      }

      list.push({
        key:product.key,
        name:product.val().name,
        price:product.val().price,
        imageUrl:product.val().imageUrl,
        desc:product.val().desc,
        items:product.val().items
      });
    });
    setProducts(list);
    setRecommendedProducts(recommendedList);
  }

  function loadSections(snapshot){
    const list = [];

    snapshot.forEach(section =>{
      list.push({
        name:section.val().name,
        imageUrl:section.val().imageUrl
      })
    })
    setSections(list);
  }

  function searchProduct(){
    if(search !== ''){
      let text = search;
      props.navigation.navigate('ProductList', {type:'search', name:text});
      setSearch('');
    }
  }

  return (
    <View style={{backgroundColor:'#FFFFFF', flex:1}}>
    <StatusBar backgroundColor="#FFFFFF" barStyle='dark-content'/>
      {/* HEADER */}
      <View style={styles.containerHeader}>

        <TouchableOpacity onPress={()=>props.navigation.toggleDrawer()}>
          <Icon name='navicon' size={26} style={styles.navIcon}/>
        </TouchableOpacity>

        <View style={styles.searchArea}>

          <TextInput 
            style={styles.inputSearch}
            value={search}
            placeholder='Pesquisar...'
            placeholderTextColor='#6A6A6A'
            placeholderStyle={{color:'rgba(106, 106, 106, 0.65)'}}
            onChangeText={text => setSearch(text)}
          />
          <TouchableOpacity onPress={searchProduct} style={styles.searchIcon}>
            <Icon name='search' size={20} />
          </TouchableOpacity>

        </View>

      {/* CONTENT */}
      </View>
      <StatusBar backgroundColor="#FFFFFF" barStyle='dark-content'/>
      {loading === true && (<ActivityIndicator size='large' color='#0000FF' />)}
      {loading === false && (
        <ScrollView 
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl colors={['#1976d2']}refreshing={refreshing} onRefresh={onRefresh} />}
        >    
          <View style={{marginBottom:30}}>
            <Text style={styles.titleSection}>Promoções</Text>
            <FlatList 
              horizontal={true}
              data={promotions}
              renderItem={({item})=><Promotion name={item.name} url={item.imageUrl} onPress={()=>getPromotionItems(item.name)}/>}
              keyExtractor={(item)=> item.key}
              style={styles.list}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{marginBottom:30}}>
            <Text style={styles.titleSection}>Categorias</Text>
            <FlatList 
              horizontal={true}
              data={sections}
              renderItem={({item})=><ItemMenu url={item.imageUrl} name={item.name} onPress={()=>props.navigation.navigate('ProductList', {type:'section', name:item.name})}/>}
              keyExtractor={(item)=> item.imageUrl}
              style={styles.list}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{marginBottom:30}}>
            <Text style={styles.titleSection}>Populares</Text>
            <FlatList 
              horizontal={true}
              data={products}
              renderItem={({item})=><ItemMenu url={item.imageUrl} name={item.name} price={item.price} onPress={()=>props.navigation.navigate('Product', {item, direct:1})}/>}
              keyExtractor={(item)=> item.key}
              style={styles.list}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{marginBottom:30}}>
            <Text style={styles.titleSection}>Recomendamos</Text>
            <FlatList 
              horizontal={true}
              data={recommendedProducts}
              renderItem={({item})=><ItemMenu url={item.imageUrl} name={item.name} price={item.price} onPress={()=>props.navigation.navigate('Product', {item, direct:1})}/>}
              keyExtractor={(item)=> item.key}
              style={styles.list}
              showsHorizontalScrollIndicator={false}
            />
          </View>

        </ScrollView>
      )}
      
    </View>

  );
}
