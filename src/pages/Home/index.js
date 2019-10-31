import React from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, TextInput, FlatList, StatusBar } from 'react-native';
import styles from './styles';
import Easy from '../../services/firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemMenu from '../../components/Item-Menu/index';
import Promotion from '../../components/Promotion/index';


export default function Home(props) {
  const tempList = [
    {key:1, teste:1},
    {key:2, teste:2},
    {key:3, teste:3},
    {key:4, teste:1},
    {key:5, teste:2},
    {key:6, teste:1},
    {key:7, teste:2},
    {key:8, teste:1},
    {key:9, teste:2},
    {key:10, teste:1},
    {key:11, teste:2},
    {key:12, teste:1},
    {key:13, teste:2},
    {key:14, teste:1},
    {key:15, teste:2},
    {key:16, teste:1},
    {key:17, teste:2}
    ];

  function signOut(){
    Easy.logout();
    props.navigation.navigate('Login');
  }

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#FFFFFF" barStyle='dark-content'/>
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom:40}}>
          <Text style={styles.titleSection}>Promoções</Text>
          <FlatList 
            horizontal={true}
            data={tempList}
            renderItem={({item})=><Promotion />}
            keyExtractor={(item, index)=> item.key.toString()}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{marginBottom:40}}>
          <Text style={styles.titleSection}>Categorias</Text>
          <FlatList 
            horizontal={true}
            data={tempList}
            renderItem={({item})=><ItemMenu />}
            keyExtractor={(item, index)=> item.key.toString()}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{marginBottom:40}}>
          <Text style={styles.titleSection}>Pratos Populares</Text>
          <FlatList 
            horizontal={true}
            data={tempList}
            renderItem={({item})=><ItemMenu />}
            keyExtractor={(item, index)=> item.key.toString()}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{marginBottom:40}}>
          <Text style={styles.titleSection}>Recomendamos</Text>
          <FlatList 
            horizontal={true}
            data={tempList}
            renderItem={({item})=><ItemMenu />}
            keyExtractor={(item, index)=> item.key.toString()}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
          />
        </View>

          <Button title='Deslogar' onPress={signOut} style={{marginTop:40}}/>
      </ScrollView>
      
    </React.Fragment>

  );
}
