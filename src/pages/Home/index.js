import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import styles from './styles';
import Easy from '../../services/firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemMenu from '../../components/Item-Menu/index';
import Promotion from '../../components/Promotion/index';

export default (props) => {
  const [products, setProducts] = useState([]);
  const [sections, setSections] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
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
    
    getSections();
    getProducts();
    setLoading(false);
    
  }, [refreshing]);
  
  function loadLists(snapshot){
    const list = [];

    snapshot.forEach((product)=>{
      list.push({
        key:product.key,
        name:product.val().name,
        price:product.val().price,
        url:product.val().imageUrl,
        desc:product.val().desc,
        items:product.val().items
      });
    });
    setProducts(list);
  }

  function loadSections(snapshot){
    const list = [];

    snapshot.forEach(section =>{
      list.push({
        name:section.val().name,
        url:section.val().imageUrl
      })
    })
    setSections(list);
  }


  return (
    <React.Fragment>
      {console.log(sections)}
      {/* HEADER */}
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

        
      {/* CONTENT */}
      </View>
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
              data={sections}
              renderItem={({item})=><ItemMenu url={item.url} name={item.name} />}
              keyExtractor={(item)=> item.url}
              style={styles.list}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{marginBottom:30}}>
            <Text style={styles.titleSection}>Populares</Text>
            <FlatList 
              horizontal={true}
              data={products}
              renderItem={({item})=><ItemMenu url={item.url} name={item.name} price={item.price} onPress={()=>props.navigation.navigate('Product', item)}/>}
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
              renderItem={({item})=><ItemMenu url={item.url} name={item.name} price={item.price} onPress={()=>props.navigation.navigate('Product', item)}/>}
              keyExtractor={(item)=> item.key}
              style={styles.list}
              showsHorizontalScrollIndicator={false}
            />
          </View>

        </ScrollView>
      )}
      
    </React.Fragment>

  );
}
