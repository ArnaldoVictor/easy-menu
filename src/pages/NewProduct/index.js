import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, TextInput, Alert } from 'react-native';
import { Formik } from 'formik';
import styles from './styles';

export default function newProduct(props) {
    const [list, setList] = useState([]);

    function addItem(item){
        setList([...list, item]);
    }

    function removeItem(item) {
        const newList = [...list];
        const index = newList.indexOf(item);

        if(index !== -1){
            newList.splice(index, 1);
            setList([...newList]);
        }
    
    }

    function newProduct(){
        Alert.alert('Upload', 'Cadastrado com sucesso!')
    }

    function uploadImage(){

    }

    function renderList(){
        
        return (
            list.map((item, index)=> (
                <View style={styles.itemArea} key={index}>                
                    <Text style={styles.itemText} numberOfLines={1}>{item}</Text>
                    <TouchableOpacity onPress={() => removeItem(item)}>
                        <Text style={styles.removeItem}>X</Text>
                    </TouchableOpacity>
                </View>
                )   
            )
        )
    }
    
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.uploadBox}>
                <TouchableOpacity style={styles.backButton} onPress={()=>props.navigation.goBack()}>
                    <Image style={styles.backImage} source={require('../../assets/images/white-arrow.png')}/>
                </TouchableOpacity>
                <View style={styles.uploadArea}>
                    <TouchableOpacity style={styles.btnAddImage}>
                        <Text style={styles.addImage}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.newProduct}>
                <Text style={styles.registerProduct}>Cadastrar Produto</Text>
                <Formik
                    initialValues={{
                        name:'',
                        desc:'',
                        price:''    
                    }}
                    onSubmit={newProduct}
                >
                    {({ handleChange, handleSubmit, values })=>(
                        <React.Fragment>
                            <TextInput 
                                placeholder='Nome do produto'
                                placeholderTextColor='#6A6A6A'
                                onChangeText={handleChange('name')}
                                value={values.name}
                                style={styles.input}
                            />

                            <TextInput 
                                placeholder='Descrição do produto'
                                placeholderTextColor='#6A6A6A'
                                onChangeText={handleChange('desc')}
                                value={values.desc}
                                style={[styles.input, {height:180, textAlignVertical: "top"}]}
                                placeholderStyle={styles.placeholderDesc}
                                multiline = {true}
                                numberOfLines = {34}
                            />

                            <TextInput
                                placeholder='Preço'
                                placeholderTextColor='#6A6A6A'
                                onChangeText={handleChange('price')}
                                value={values.price}
                                style={styles.input}
                            />
                            <View style={styles.addItemArea}>
                                <TextInput
                                    placeholder='Adicionar Item'
                                    placeholderTextColor='#6A6A6A'
                                    onChangeText={handleChange('item')}
                                    style={[styles.input, {width:214}]}
                                    values={values.item}
                                />
                                <TouchableOpacity style={styles.btnAddItem} onPress={()=>addItem(values.item)}>
                                    <Text style={styles.addItem}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginBottom:20}}>

                                {list.length > 0 && renderList() }
                                
                            </View>
                            <TouchableOpacity style={styles.registerBtn} onPress={handleSubmit}>
                                <Text style={styles.TBtn}>Cadastrar</Text>
                            </TouchableOpacity>


                        </ React.Fragment>
                    )}
                </Formik>
            </View>
        </ScrollView>
    );
}