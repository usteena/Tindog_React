import React, { useState } from 'react';
import { Text,View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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

            <TouchableOpacity style={[styles.button, styles.buttonInfo]} onPress={displayModal}>
                <FontAwesome name="info" size={27} color="#808080"></FontAwesome>
            </TouchableOpacity>
            
                <Modal isVisible={isModalVisible} transparent animationType="slide">
                    <TouchableOpacity onPress={displayModal} style={styles.closeButton}>
                        <FontAwesome name="close" color="#fff" size={27} />
                    </TouchableOpacity>

                    <View style={styles.imagesMeta}>
                        <View style={[styles.boxStyle,{flex: 0.4}]}>
                            <Text style={[styles.overviewStyle, {fontSize: 25}]}>{user.title}</Text>
                        </View>
                        <ScrollView style={{flex:1}}>
                        <View style={[styles.boxStyle, {marginVertical: 10,flex: 1,}]}>
                            <Text style={[styles.overviewStyle, { fontSize: 20 }]}>{user.overview}</Text>
                        </View>
                        </ScrollView>
                    </View>
                    <View >
                        <Text style={styles.ModalText}>Rating:
                            {user.vote_average} <FontAwesome name="star" color="#fff" />

                        </Text>
                        <Text style={styles.ModalText}>Release date :
                            <FontAwesome name="calendar" color="#fff" /> {user.release_date}
                        </Text>
                    </View>
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
      imagesMeta: {
        height: '40%',
        width: '95%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
      },
      boxStyle: {
        backgroundColor: 'transparent',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '2%',
    },
      overviewStyle: {
        color: '#fff',
        textAlign: 'left'
      },
      ModalText: {
        color: '#fff',
        fontSize: 16
      },
})