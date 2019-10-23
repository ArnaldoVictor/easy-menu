import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, StatusBar, Vibration } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from './styles';

export default function QRCode(props) {
    const [camera, setCamera] = useState(null);
    const [barCodeType, setBarCodeType] = useState(null);
    const [barCodeData, setBarCodeData] = useState(null);

    function readCode(object){
        if(object.type != null && barCodeType === null){
            setBarCodeType(object.type);
            setBarCodeData(object.data);
            Vibration.vibrate(100);
        }
    }

    return (
        // Container
        <View style={styles.Container}>
        <StatusBar hidden={true}/>

            {/* Back Button */}
            <TouchableOpacity  style={styles.BackButton} onPress={()=>props.navigation.goBack()}>
                <Image style={styles.BackImage} source={require('../../assets/images/white-arrow.png')} />
            </TouchableOpacity>

            {/* Camera */}
            <RNCamera 
                style={{...StyleSheet.absoluteFill}}
                ref={(camera)=>setCamera(camera)}
                type={RNCamera.Constants.Type.back}
                captureAudio={false}
                androidCameraPermissionOptions={{
                    title:'Permissão Camera',
                    message:'Precisamos usar sua camera para isso.',
                    buttonPositive:'Permitir',
                    buttonNegative:'Não Permitir'
                }}
                onBarCodeRead={readCode}
            />

            {/* QRCode Mask */}
            <View style={styles.QRMask}>

                {/* QRCode Scanning Area */}
                <View style={styles.QRArea}>

                    {/* Top Area */}
                    <View style={styles.DivArea}>

                        <View style={styles.leftTop}></View>
                        <View style={{ flex:1 }}/>
                        <View style={styles.rightTop}></View>
                        
                    </View>

                    <View style={{ flex:1 }} />

                    {/* Bottom Area */}
                    <View style={styles.DivArea}>
                        
                        <View style={styles.leftBottom}></View>
                        <View style={{ flex:1 }}/>
                        <View style={styles.rightBottom}></View>

                    </View>
                </View>
            </View>
        </View>
    );
}
