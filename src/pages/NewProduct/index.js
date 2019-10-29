import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, Alert, StatusBar, Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Formik } from 'formik';
import styles from './styles';
import RNFetchBlob from 'rn-fetch-blob';
import Easy from '../../services/firebase';

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;


export default (props) => {
    const [list, setList] = useState([]);
    const [image, setImage] = useState({});
    const [urlImage, setUrlImage] = useState(null);
    const width = Dimensions.get('screen').width;

    function addItem(item){
        if(item !== ''){
            setList([...list, item]);
        }
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
        if(values.name !== '', values.desc !== '' && values.price !== ''){
            // const { path } = image; 
            // console.log('(Funcao do upload) path = ', path);
            // const storageRef = Easy.refUploadImage();
            // const pathT = `product_${Math.floor(Math.random() * 1000 + 1)}`;
            // const metadata = { contentType: "image/jpeg" };
            // const mime = 'image/jpeg';
            // const blob = RNFetchBlob.polyfill.Blob.build(image.displayImage, {type:mime+';BASE64'});

            // console.log(image.image);
            // await storageRef.child(`item/imagem.jpg`).put(blob, metadata);
            // await storageRef
            //     .child(`item/${pathT}`)
            //     .getDownloadURL()
            //     .then((image) => {
            //         setUrlImage( image );     
            //     }).catch(error => {
            //         Alert.alert(error.code);
            //     });

            const path = values.name+'/'+values.name+'.jpg';
            const mime = 'image/jpeg';
            const imagem = Easy.refUploadImage(path);

            RNFetchBlob.fs.readFile(image.uri, (data)=>{
                return RNFetchBlob.polyfill.Blob.build(data, {type:mime+';BASE64'})
            }).then((blob) => {
                imagem.put(blob, {contentType:mime}).then(() =>{
                    blob.close()
                    Alert.alert('Upload', 'Upload feito com sucesso!')
                }).catch(error=>{
                    Alert.alert('ERRO', error.code)
                })
            });

            await Easy.registerProduct(values.name, values.desc, values.price, list);
        }
    }

    async function uploadImage(){       

        const options = {
            title: 'Selecionar Imagem',
            takePhotoButtonTitle: 'Tirar foto',
            chooseFromLibraryButtonTitle: 'Carregar da Galeria',
            cancelButtonTitle: 'Cancelar',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        await ImagePicker.showImagePicker(options, (response)=>{
            if(response.uri){
                const displayImage = { uri: 'data:image/jpeg;base64,' + response.data };
                const {path, width, height} = response;
                const newImage = { path, width, height };
                console.log('TESTE 123', path); 

                
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
    } // era pra ter dado console.log?
    
    return (
        //Container
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {console.log("depois do setImage = ", image)}
            <StatusBar backgroundColor="#FFFFFF" barStyle='dark-content'/>

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
                                value={values.price}
                                style={styles.input}
                            />

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