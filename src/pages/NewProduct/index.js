import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, Alert, Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Formik } from 'formik';
import styles from './styles';
import Mask from '../../common/textMask';
import Easy from '../../services/firebase';

export default (props) => {
    const [list, setList] = useState([]);
    const [image, setImage] = useState({});
    const [sections, setSections] = useState([]);
    const [selectedSection, setSelectedSection] = useState('');
    const width = Dimensions.get('screen').width;

    function onSnapshot(snapshot){
        let list = []

        snapshot.forEach((section)=>{
            list.push({
                name:section.key
            });
        })
        setSections(list);

    }

    useEffect(()=>{
        const ref = Easy.getSectionList();
        ref.once('value', onSnapshot);
    }, []);

    function addItem(item){
        if(item !== ''){
            setList([...list, item]);
        }
    }

    function renderSectionList(){
        const active = 'rgba(21,101,192, 1)';
        const inactive = 'rgba(255, 255, 255, 0)';

        return (sections.map((section)=>(

                <TouchableOpacity 
                    key={section.name} 
                    onPress={()=>setSelectedSection(section.name)}
                    style={[styles.section, {backgroundColor:selectedSection===section.name ? active : inactive}]}
                >
                    <Text style={[styles.textSection, {color:selectedSection===section.name ? '#FFF' : '#000'}]}>
                        {section.name}
                    </Text>
                </TouchableOpacity> 

                )
            ) 
        );
    }

    function removeItem(item) {
        const newList = [...list];
        const index = newList.indexOf(item);

        if(index !== -1){
            newList.splice(index, 1);
            setList([...newList]);
        }
    
    }

    async function newProduct(values){

        if(values.name !== '', values.desc !== '' && values.price !== 'R$' && values.price !== '' && image !== {}){
            const path = `images/${values.name}.jpg`;
            const storageRef = Easy.refUploadImage(path);
            const metadata = {
                contentType: "image/jpeg"
            };
            
            await storageRef.putString(image.displayImage, 'base64', metadata).then(()=>{
                Easy.getImageURL(path).then(async (url)=>{
                    await Easy.registerProduct(values.name, values.desc, values.price, list, url, selectedSection);
                });
                Alert.alert('Cadastro', 'Cadastro feito com sucesso!')

            })
        }else{
            Alert.alert('ERRO', 'Preencha os dados corretamente')
        }

    }

    async function uploadImage(){       

        const options = {
            title: 'Selecionar Imagem',
            takePhotoButtonTitle: 'Tirar foto',
            chooseFromLibraryButtonTitle: 'Carregar da Galeria',
            cancelButtonTitle: 'Cancelar',
            base64: true,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        await ImagePicker.showImagePicker(options, (response)=>{
            if(response.uri){
                const displayImage = response.data ;
                const {path, width, height} = response;
                const newImage = { path, width, height };
                
                setImage({ image: newImage, displayImage, uri:response.uri});

            }
        });
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
        //Container
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            {/* Box Upload */}
            <View style={styles.uploadBox}>  
                <TouchableOpacity style={styles.backButton} onPress={()=>props.navigation.goBack()}>
                    <Image style={styles.backImage} source={require('../../assets/images/white-arrow.png')}/>
                </TouchableOpacity>
                <View style={styles.uploadArea}>
                    <TouchableOpacity style={image.uri === undefined?styles.btnAddImage:styles.foto} onPress={uploadImage}>
                        {image.uri !== undefined && <Image resizeMode='stretch' style={styles.foto} source={{uri:image.uri}} />}
                        {image.uri === undefined && <Text style={styles.addImage}>+</Text>}
                    </TouchableOpacity>
                </View>
            </View>

            {/* Form */}
            <View style={styles.newProduct}>                
                <Text style={styles.registerProduct}>Cadastrar Produto</Text>
                <Formik
                    initialValues={{
                        name:'',
                        desc:'',
                        price:'',
                        item:'' 
                    }}
                    onSubmit={values => newProduct(values)}
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
                                keyboardType='number-pad'
                                value={Mask.priceMask(values.price)}
                                style={styles.input}
                                maxLength={16}
                            />
                            
                            {sections !== [] && renderSectionList()}

                            <View style={styles.addItemArea}>
                                <TextInput
                                    placeholder='Adicionar Item'
                                    placeholderTextColor='#6A6A6A'
                                    onChangeText={handleChange('item')}
                                    style={[styles.input, {width:width-160}]}
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