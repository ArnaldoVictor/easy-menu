import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Easy from '../../services/firebase';
import Promotion from '../../components/Promotion/index';
import styles from './styles';

export default (props) => {
    const [image, setImage] = useState({});
    const [items, setItems] = useState([]);
    const [promotionName, setPromotionName] = useState('');

    function handleName(text){
        setPromotionName(text);
    }

    async function uploadImage(){
        const path = `promotions/${promotionName}.jpg`;
        const storageRef = Easy.refUploadImage(path);
        const metadata = {
            contentType:'image/jpeg'
        }

        await storageRef.putString(image.displayImage, 'base64', metadata).then(async ()=>{
            await Easy.getImageURL(path).then(async (url)=>{
                await Easy.newPromotion(promotionName, url);
                Alert.alert('Upload', 'Nova Promoção adicionada com sucesso!');
                
            })
        })
    }

    async function selectImage(){
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
                const displayImage = response.data;
                const { path, width, height } = response;
                const newImage = { path, width, height };

                setImage({image:newImage, displayImage, uri:response.uri});
            }
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Nova Promoção</Text>
            <Text style={styles.h3}>Digite o nome da Promoção</Text>

            <TextInput
                placeholder='Digite o nome para a promoção...'
                style={styles.input}
                onChangeText={(text)=>handleName(text)}            
            />
            <Text style={styles.h3}>Faça o upload da Imagem</Text>
            <View style={image.uri === undefined ? styles.pictureContainer: styles.pictureActive}>
                <TouchableOpacity onPress={selectImage}>
                    {image.uri === undefined && <Text style={styles.selectImage}>+</Text> }
                    {image.uri !== undefined && <Promotion name={sectionName} url={image.uri} style={true}/>}
                </TouchableOpacity>
            </View>
            <Text style={styles.h1}>Preview</Text>

            <TouchableOpacity style={styles.addSection} onPress={uploadImage}>
                <Text style={styles.TBtn}>Adicionar Promoção</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.goBack} onPress={()=>props.navigation.goBack()}>
                <Text style={styles.TBtn}>Voltar</Text>
            </TouchableOpacity>

        </View>
    );
}
