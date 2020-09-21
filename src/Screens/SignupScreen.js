import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../Components/Spacer';
import { Context as AuthContext } from '../Context/AuthContext';
import AuthForm from '../Components/AuthForm';
import NavLink from '../Components/NavLink';
import {NavigationEvents} from 'react-navigation';
import {logo} from '../../assets/logo.png';

const SignupScreen = ({ navigation }) => {

    const { state, signUp, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container} >
        <NavigationEvents  onWillBlur={() => {clearErrorMessage()}} />
        <Image  source={ require('../../assets/logo.png')} style={{alignSelf: 'center', height:124, width: 184}} />
            <AuthForm
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={({ email, password }) => { signUp({ email, password }) }}
            />
           <NavLink 
               text="Already have an account ? Sign in instead"
               routeName="SigninScreen"
           />
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        header: () => false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#CA534C'
    },
  
});

export default SignupScreen;