import React, { useState, useContext } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../Components/Spacer';
import { StyleSheet, View } from 'react-native';
import { Context as AuthContext } from '../Context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import { navigate } from '../navigationRef';

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const { clearErrorMessage, forgotPassword, state, clearSuccessMessage } = useContext(AuthContext);
    console.log(state.successMessage);
    console.log(state.errorMessage);
    return (
        <View style={styles.container} >
            <NavigationEvents onWillBlur={() => { clearErrorMessage() }} />
            <NavigationEvents onDidBlur={() => { clearSuccessMessage() }} />
            <Spacer>
                <Text h3 style={{ color: '#ffffff', marginBottom: 32 }}> Reset Password </Text>
            </Spacer>
            <Spacer>
                <Input
                    label="Email"
                    value={email}
                    onChangeText={(value) => { setEmail(value) }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    inputContainerStyle={styles.inputContainerStyle}
                    labelStyle={{ color: 'white', fontWeight: 'normal' }}
                    keyboardType="email-address"
                />
            </Spacer>

            {state.errorMessage ? <Text style={styles.errorText} > {state.errorMessage} </Text> : null}
            {state.successMessage ? <Text style={styles.successText} > {state.successMessage} </Text> : null}

            {state.successMessage ?
                <Spacer>
                    <Spacer>
                        <Button buttonStyle={{
                            backgroundColor: '#9C3C37'
                        }} title="Sign in now" onPress={() => { navigate('SigninScreen') }} />
                    </Spacer>
                </Spacer>
                :
                <Spacer>
                    <Spacer>
                        <Button buttonStyle={{
                            backgroundColor: '#9C3C37'
                        }} title="Submit" onPress={() => { forgotPassword({ email }) }} />
                    </Spacer>
                </Spacer>
            }
            {/* <Spacer>
                <Spacer>
                    <Button buttonStyle={{
                        backgroundColor: '#9C3C37'
                    }} title="Submit" onPress={() => { forgotPassword({ email }) }} />
                </Spacer>
            </Spacer> */}


        </View>
    );
}


ForgotPasswordScreen.navigationOptions = () => {
    return {
        header: () => false
    };
};


const styles = StyleSheet.create({
    errorText: {
        fontSize: 16,
        color: 'white',
        margin: 16
    },
    successText: {
        fontSize: 16,
        color: 'green',
        margin: 16
    },
    buttonStyle: {
        backgroundColor: '#CA534C'
    },
    inputContainerStyle: {
        borderWidth: 1,
        borderColor: '#CA534C',
        borderRadius: 5,
        backgroundColor: '#ffffff'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#CA534C'
    }
});

export default ForgotPasswordScreen;