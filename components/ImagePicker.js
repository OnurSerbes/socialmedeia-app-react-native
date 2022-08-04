import { Button, View, StyleSheet, Alert, Image, Text } from "react-native"
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'
import React, { useEffect, useState, useLayoutEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";



function ImagePicker(){

    const [pickedImage, setPickedImage] = useState(null);
    const [cameraPermissionInfromation, requestPermission] = useCameraPermissions()

    useFocusEffect(
        React.useCallback(()=>{
            if(pickedImage===null){
                takeImageHandler()
            }
        },[pickedImage, cameraPermissionInfromation])
    )

    function deletePreview(){
        setPickedImage(null)
    }

    async function verifyPermissin(){
       if(cameraPermissionInfromation.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission();
        return permissionResponse.granted;
       }
       if(cameraPermissionInfromation.status === PermissionStatus.DENIED){
        const permissionResponse = await requestPermission();
        Alert.alert('Insufficient Permissions!', 'You need to grant camera permissions to use this app.') 
          
        return false
        
       }
       return true
    }

    async function takeImageHandler(){
       
        try{
            const hasPermission = await verifyPermissin();

            if(!hasPermission){
                return;
            }
            const image = await launchCameraAsync({
                allowsEditing: true,
                aspect: [16, 9],
                quality: 0.5,
            });

            setPickedImage(image.uri)
            console.log(image)
        }catch(e){
            console.log(e)
        }
    }

    let imagePreview = <Text>No image taken yet.</Text>

    if(pickedImage){
        imagePreview = <Image style={styles.image} source={{uri: pickedImage}}/>
    }

    return (
        <View>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <Button title="cancel" onPress={deletePreview}/>
            <View style={styles.picker}>
               {/*  <Button title="Take Image" onPress ={takeImageHanddler}/> */}
            </View>
        </View>
    )
}

export default ImagePicker

const styles = StyleSheet.create({
    picker:{
        marginTop: 50,
    },
    imagePreview: { 
        width: '100%',
        height: 300,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
