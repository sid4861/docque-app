import React, {useContext, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, AsyncStorage} from 'react-native';
import {Context as AuthContext} from '../Context/AuthContext';

const LogoutScreen = () => {

    const {signOut} = useContext(AuthContext);

    useEffect(() => {
        signOut();
    }, []);

    return(
        <View style={styles.container} >
            <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 96 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CA534C',
    }
});


export default LogoutScreen;