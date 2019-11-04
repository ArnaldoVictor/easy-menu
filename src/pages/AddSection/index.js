import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default (props) => {  

    function handleName(){

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
            <View style={styles.pictureContainer}>
                <TouchableOpacity>
                    <Text style={styles.selectImage}>+</Text>
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
