import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Modal, Text } from 'react-native';
import styles from './styles';
import Easy from '../../services/firebase';

export default (props) => {
    const [visible, setVisibile] = useState(true);
    const [sections, setSections] = useState([]);


    async function loadSections(snapshot){
        const list = [];
        
        snapshot.forEach(section =>{
            list.push({
                key:section.key
            });
        });
        setSections(list);
    }

    useEffect(()=>{
        const ref = Easy.getSectionList();
        ref.once('value', loadSections);
    });

    function selected(key){
        setVisibile(false);
        return key
    }

  return (

    <Modal animationType='slide' transparent={true} visible={props.visible}>
        <View style={styles.modalContainer}>
            <Text>Selecione a categoria:</Text>
            <FlatList
                data={sections}
                renderItem={({item})=>{
                    <TouchableOpacity onPress={()=>selected(item.key)}>
                        <Text>{item.key}</Text>
                    </TouchableOpacity>
                }}
                keyExtractor={(item)=>item.key}
            />
        </View>
    </Modal>
  );
}
