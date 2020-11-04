import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AuthForm from '../Components/AuthForm';
import NavLink from '../Components/NavLink';
import { Context as AuthContext } from '../Context/AuthContext'
import { NavigationEvents } from 'react-navigation';
import Line from '../Components/Line';
import ButtonPrimary from '../Components/ButtonPrimary';
import Spacer from '../Components/Spacer';

const SigninScreen = () => {
    const { state, signIn, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container} >
            <NavigationEvents onWillBlur={() => { clearErrorMessage() }} />
            <Image  source={ require('../../assets/logo.png')} style={{alignSelf: 'center', height:124, width: 184}} />
            <AuthForm
                errorMessage={state.errorMessage}
                onSubmit={({ email, password }) => { signIn({ email, password }) }}
                submitButtonText="Sign In"
            />
             <NavLink 
               text="Forgot Password ?"
               routeName="ForgotPasswordScreen"
           />
            <Line  color={'#ffffff'} />
            <Spacer>
                <ButtonPrimary text="Sign up" routeName="SignupScreen" />
            </Spacer>
        </View>
    );
}

SigninScreen.navigationOptions = () => {
    return {
        header: () => false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#CA534C'
    }
});

export default SigninScreen;