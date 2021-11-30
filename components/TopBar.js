import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
export default function TopBar() {
    return (
        <View style={styles.container}>
            <FontAwesome5 name="fire" size={27} color="#F06795" />
            <Text style={[styles.textRow, styles.textPrimary, styles.textShadow]}>Movie Information</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9,

    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
        color: '#FD297B',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
});

