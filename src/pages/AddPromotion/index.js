import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Modal, FlatList} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Easy from '../../services/firebase';
import Promotion from '../../components/Promotion/index';
import Product from '../../components/Product/index';
import styles from './styles';

export default (props) => {
    const [image, setImage] = useState({});
    const [items, setItems] = useState([]);
    const [sections, setSections] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedSection, setSelectedSection] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [promotionName, setPromotionName] = useState('');

    function handleName(text){
        setPromotionName(text);
    }

    useEffect(()=>{
        async function onGetSections(snapshot){
            let list = []
    
            await snapshot.forEach((section)=>{
                list.push({
                    name:section.key
                });
            })
            setSections(list);
    
        }
        const ref = Easy.getSectionList();
        ref.once('value', onGetSections);
    }, [modalVisible]);

    useEffect(()=>{
        async function loadLists(snapshot){
            const list = [];
        
            await snapshot.forEach((product)=>{
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
        const ref = Easy.getProducts();
        ref.once('value', loadLists)
    }, [modalVisible]);


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
        <ScrollView 
            contentContainerStyle={styles.scrollContainer}
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {/* Header */}
            <Text style={[styles.h1, {marginTop:20}]}>Nova Promoção</Text>
            <Text style={styles.h3}>Digite o nome da Promoção</Text>

            {/* Promotion Name */}
            <TextInput
                placeholder='Digite o nome para a promoção...'
                style={styles.input}
                onChangeText={(text)=>handleName(text)}            
            />

            {/* Selecting Image */}
            <Text style={styles.h3}>Faça o upload da Imagem</Text>
            <View style={image.uri === undefined ? styles.pictureContainer: styles.pictureActive}>
                <TouchableOpacity onPress={selectImage}>
                    {image.uri === undefined && <Text style={styles.selectImage}>+</Text> }
                    {image.uri !== undefined && <Promotion name={promotionName} url={image.uri} style={true} onPress={selectImage}/>}
                </TouchableOpacity>
            </View>
            <Text style={styles.h1}>Preview</Text>

            {/* Product List */}
            <View style={styles.productHeaderArea}>
                <Text style={styles.productText}>Produtos</Text>
                <TouchableOpacity onPress={()=>setModalVisible(true)}>
                    <Text style={styles.addBtn}>Adicionar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.productList}>
                <Product/>
                <Product/>
                <Product/>
            </View>

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <TouchableOpacity onPress={()=>setModalVisible(false)}>
                    <Text style={[styles.addBtn, {textAlign:'right', margin:10}]}>Salvar</Text>
                </TouchableOpacity>
                <View>
                    <FlatList
                        data={sections}
                        renderItem={({item})=><View style={styles.sectionItem}><Text>{item.name}</Text></View>}
                        keyExtractor={(item)=>item.name}
                    />
                </View>

            </Modal>

            {/* Buttons */}
            <TouchableOpacity style={styles.addSection} onPress={uploadImage}>
                <Text style={styles.TBtn}>Criar Promoção</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.goBack} onPress={()=>props.navigation.goBack()}>
                <Text style={styles.TBtn}>Voltar</Text>
            </TouchableOpacity>
            
        </ScrollView>
    );
}
