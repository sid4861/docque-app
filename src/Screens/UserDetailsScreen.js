import React, { useState, useContext } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../Components/Spacer';
import { StyleSheet, View, Picker } from 'react-native';
import { Context as AuthContext } from '../Context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import { navigate } from '../navigationRef';
// import { Picker } from '@react-native-community/picker';

const UserDetailsScreen = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [isStudent, setIsStudent] = useState('Are you a medical student ?');
    const [degree, setDegree] = useState('Highest Qualification ?');

    const { clearErrorMessage, forgotPassword, state, clearSuccessMessage, saveUserDetails } = useContext(AuthContext);
    console.log(state.successMessage);
    console.log(state.errorMessage);
    return (
        <View style={styles.container} >
            <NavigationEvents onWillBlur={() => { clearErrorMessage() }} />
            <NavigationEvents onDidBlur={() => { clearSuccessMessage() }} />
            <Text style={{ fontSize: 18, alignSelf: 'center', color: 'white' }} > Thanks for signing up! </Text>
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    alignSelf: 'center',
                    color: 'white',
                    marginTop: 32
                }} >
                Enter below details to complete profile
              </Text>

            <View style={{marginTop: 32}} >

                <Spacer>
                    <Input
                        label="Name"
                        value={name}
                        onChangeText={(value) => { setName(value) }}
                        autoCapitalize="words"
                        autoCorrect={false}
                        inputContainerStyle={styles.inputContainerStyle}
                        labelStyle={{ color: 'white', fontWeight: 'normal' }}
                    />
                </Spacer>   

                <Spacer>
                    <Input
                        label="Country"
                        value={country}
                        onChangeText={(value) => { setCountry(value) }}
                        autoCapitalize="words"
                        autoCorrect={false}
                        inputContainerStyle={styles.inputContainerStyle}
                        labelStyle={{ color: 'white', fontWeight: 'normal' }}
                    />
                </Spacer>

                <Spacer>
                    <Picker
                        selectedValue={isStudent}
                        style={{ height: 43, width: 375, backgroundColor: 'white', alignSelf: 'center', borderWidth:1, borderColor: 'white', borderRadius: 16 }}
                        onValueChange={(itemValue, itemIndex) =>
                            setIsStudent(itemValue)
                        }
                        mode='dropdown'
                        >
                        <Picker.Item label="Are you a medical student ?" value="Are you a medical student ?" />
                        <Picker.Item label="No" value="No" />
                        <Picker.Item label="Yes" value="Yes" />
                    </Picker>
                </Spacer>

                <Spacer>
                    <Picker
                        selectedValue={degree}
                        style={{ height: 43, width: 375, backgroundColor: 'white', alignSelf: 'center', borderWidth:1, borderColor: 'white', borderRadius: 16, marginTop: 32 }}
                        onValueChange={(itemValue, itemIndex) =>
                            setDegree(itemValue)
                        }
                        mode='dropdown'
                        >
                        <Picker.Item   label="Highest Qualification ?" value="Highest Qualification ?" />
                        <Picker.Item   label="MBBS" value="MBBS" />
                        <Picker.Item label="MS" value="MS" />
                        <Picker.Item label="MD" value="MD" />
                        <Picker.Item label="DNB" value="DNB" />
                    </Picker>
                </Spacer>


                {/* {state.errorMessage ? <Text style={styles.errorText} > {state.errorMessage} </Text> : null}
            {state.successMessage ? <Text style={styles.successText} > {state.successMessage} </Text> : null} */}
                <Spacer>
                    <Spacer>
                        <Button buttonStyle={{
                            backgroundColor: '#9C3C37'
                        }} title="Let's get started" onPress={() => {saveUserDetails({name, country, isStudent, degree })} } />
                    </Spacer>
                </Spacer>


            </View>


        </View>
    );
}


UserDetailsScreen.navigationOptions = () => {
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

export default UserDetailsScreen;