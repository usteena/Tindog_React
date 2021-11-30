import React, { useState } from 'react';
import { Text,View, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import Modal from "react-native-modal";


export default function BottomBar({handleLikePress, handlePassPress, user}) {
   
    const [isModalVisible, setModalVisible] = useState(false);
    const displayModal = () => {
        setModalVisible(!isModalVisible);
    }
    
    return (
       
        
        <View style={styles.container}>
            <View />
            <TouchableOpacity style={styles.button} onPress={handlePassPress}>
                <FontAwesome name="times" size={50} color="#F06795"></FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonInfo ]} onPress={displayModal}>
                <FontAwesome name="info" size={27} color="#808080"></FontAwesome>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
            <TouchableOpacity onPress={displayModal} style={styles.closeButton}>
            {/* <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${user.poster_path}` }}
            style={styles.poster}
          /> */}
            <FontAwesome name="close" color="#fff" size={27} />
          </TouchableOpacity>
            </Modal>
           
            <TouchableOpacity style={styles.button} onPress={handleLikePress}>
                <FontAwesome name="heart" size={40} color="#64EDCC"></FontAwesome>
            </TouchableOpacity>
            <View />
        </View>

    )
}

const styles = StyleSheet.create ({
    container: {
        height:75,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    button: {
        width:70,
        height:70,
        backgroundColor:'white',
        borderRadius:45,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height:0,
        },
        shadowOpacity:0.15,
        shadowRadius:6.46,
        elevation:9,
    },
    buttonInfo: {
        width: 50,
        height: 50,
      },
      closeButton: {
        position: 'absolute',
        top: '1%',
        right: '2%',
        zIndex: 2,
        backgroundColor: 'transparent'
      },
      poster: {
        flex: 1,
        height: null,
        width: null,
      }
})