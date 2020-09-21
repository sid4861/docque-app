import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Line from '../Components/Line';
import Spacer from '../Components/Spacer';

const LoadingScreen = () => {
    return (
        <View style={styles.container} >
            <View style={{ marginTop: 112 }} >
                <Text style={styles.quoteStyle} >
                    “The important thing is not to stop questioning.”
            </Text>
                <Spacer>
                    <Spacer>
                        <Spacer>
                            <Line style={styles.lineStyle} />
                        </Spacer>

                    </Spacer>

                </Spacer>
                <Text style={styles.quoteStyle} >
                    Albert Einstein
            </Text>
                <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 48 }} />
            </View>
        </View>
    );
};

LoadingScreen.navigationOptions = () => {
    return {
        header: () => false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CA534C',
    },
    quoteStyle: {
        fontSize: 18,
        lineHeight: 26,
        color: '#ffffff',
        textAlign: 'center'
    },
    lineStyle: {
        marginHorizontal: 32
    }
});

export default LoadingScreen;