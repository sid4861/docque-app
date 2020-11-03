import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { navigate } from '../navigationRef';

const FloatingActionButton = ({ route, params, navigation }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.TouchableOpacityStyle}
            onPress={params ? () => { navigation.navigate(route, params) } : () => { navigate(route) }}
        >
            <Image
                source={require('../../assets/fab.png')}
                style={styles.FloatingButtonStyle}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    }
});

export default withNavigation(FloatingActionButton);