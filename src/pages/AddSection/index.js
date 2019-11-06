import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Easy from '../../services/firebase';
import ItemMenu from '../../components/Item-Menu/index';
import styles from './styles';

export default (props) => {
    const [image, setImage] = useState({});
    const [sectionName, setSectionName] = useState('');

    function handleName(text){
        setSectionName(text);
    }

    async function uploadImage(){
        const path = `sections/${sectionName}.jpg`;
        const storageRef = Easy.refUploadImage(path);
        const metadata = {
            contentType:'image/jpeg'
        }

        await storageRef.putString(image.displayImage, 'base64', metadata).then(async ()=>{
            await Easy.getImageURL(path).then(async (url)=>{
                await Easy.newSection(sectionName, url);
                Alert.alert('Upload', 'Nova categoria adicionada com sucesso!');
                
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
        console.log('Me clicou!');
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
        <ScrollView scrollContentStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.h1}>Nova Categoria</Text>
                <Text style={styles.h3}>Digite o nome da categoria</Text>

                <TextInput
                    placeholder='Digite o nome para a categoria...'
                    style={styles.input}
                    onChangeText={(text)=>handleName(text)}            
                />
                <Text style={styles.h3}>Faça o upload da Imagem</Text>
                <View style={image.uri === undefined ? styles.pictureContainer: styles.pictureActive}>
                    <TouchableOpacity onPress={selectImage}>
                        {image.uri !== undefined && <ItemMenu name={sectionName} url={image.uri} style={true} onPress={selectImage}/>}
                        {image.uri === undefined && <Text style={styles.selectImage}>+</Text> }
                    </TouchableOpacity>
                </View>
                <Text style={styles.h1}>Preview</Text>

                <TouchableOpacity style={styles.addSection} onPress={uploadImage}>
                    <Text style={styles.TBtn}>Adicionar Categoria</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.goBack} onPress={()=>props.navigation.goBack()}>
                    <Text style={styles.TBtn}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
