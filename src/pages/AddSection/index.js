import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import ItemMenu from '../../components/Item-Menu/index';
import styles from './styles';

export default (props) => {
    const [image, setImage] = useState({});
    const [sectionName, setSectionName] = useState('');

    function handleName(text){
        setSectionName(text);
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
                    {image.uri === undefined && <Text style={styles.selectImage}>+</Text> }
                    {image.uri !== undefined && <ItemMenu name={sectionName} url={image.uri} style={true}/>}
                    {/* {image.uri !== undefined && <Text numberOfLines={2} style={styles.sectionName}>{sectionName}</Text>}
                    {image.uri !== undefined && <LinearGradient style={styles.gradient} colors={['rgba(255, 255, 255, 0.1)', 'rgba(0, 0, 0, 0.7)']}/>} */}
                </TouchableOpacity>
            </View>
            <Text style={styles.h1}>Preview</Text>

            <TouchableOpacity style={styles.addSection}>
                <Text style={styles.TBtn}>Adicionar Categoria</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.goBack} onPress={()=>props.navigation.goBack()}>
                <Text style={styles.TBtn}>Voltar</Text>
            </TouchableOpacity>

        </View>
    );
}
