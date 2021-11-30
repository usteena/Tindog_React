import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
export default function SwipeableImage({ user, willLike, willPass }) {
    return (
        <View>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${user.poster_path}` }} style={styles.photo} />
            {willLike && (
                <View style={styles.likeBox}>
                    <Text STYLE={{ ...styles.textPrimary, color: '#64EDCC' }}>LIKE</Text>
                </View>
            )}
            {willPass && (
                <View style={styles.passBox}>
                    <Text STYLE={{ ...styles.textPrimary, color: '#F06795' }}>NOPE</Text>
                </View>
            )}
            
        </View>

    )
}
const boxStyle = {
    position: 'absolute',
    top: '50%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 3,
    borderRadius: 10,
}
const styles = StyleSheet.create({
    likeBox: {
        ...boxStyle,
        left: 40,
        borderColor: '#64EDCC'
    },
    passBox: {
        ...boxStyle,
        right: 40,
        borderColor: '#F06795'
    },
    photo: {
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    textPrimary: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
})