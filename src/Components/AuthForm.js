import React, { useState, useContext } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { StyleSheet, View } from 'react-native';
import {Context as AuthContext} from '../Context/AuthContext';

const AuthForm = ({ errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationError, setValidationError] = useState('');
    const {state} = useContext(AuthContext);
    return (
        <>
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

            <Spacer>
                <Input
                    label="Password"
                    value={password}
                    onChangeText={(newPassword) => { setPassword(newPassword) }}
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry
                    inputContainerStyle={styles.inputContainerStyle}
                    labelStyle={{ color: 'white', fontWeight: 'normal' }}
                />
            </Spacer>
            {state.errorMessage !== '' ? <Text style={styles.errorText} > {state.errorMessage} </Text> : null}
            {validationError ? <Text style={styles.errorText} > {validationError} </Text> : null}

            <Spacer>
                <Spacer>
                    <Button buttonStyle={{
                        backgroundColor: '#9C3C37'
                    }} title={submitButtonText} onPress={() => { 
                        !email || !password ? setValidationError('Oops, missing email/password')
                        :
                        onSubmit({ email, password }) 
                        }} />
                </Spacer>
            </Spacer>


        </>
    );
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 16,
        color: 'white',
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
    }
});

export default AuthForm;