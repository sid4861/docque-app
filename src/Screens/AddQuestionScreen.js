import React, { useState, useContext } from 'react';
import { View, StyleSheet, Picker } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../Components/Spacer';
import * as DocumentPicker from 'expo-document-picker';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import {Context as QuestionContext} from '../Context/QuestionContext';

// import Picker from '@react-native-community/picker'; 

var fileName = null;
var downloadUrl = null;
var filenameUuid = null;

const AddQuestionScreen = () => {
    const [question, setQuestion] = useState('');
    const [tag, setTag] = useState('Select speciality');
    const [fileUploaded, setFileUploaded] = useState(false);
    const {saveQuestion, state} = useContext(QuestionContext);

    const uriToBlob = (uri) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                // return the blob
                resolve(xhr.response);
            };
    
            xhr.onerror = function () {
                // something went wrong
                reject(new Error('uriToBlob failed'));
            };
            // this helps us get a blob
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
    
            xhr.send(null);
        });
    }
    
    const uploadToFirebase = (blob, fileName) => {
        filenameUuid = uuidv4();
        return new Promise((resolve, reject) => {
            var storageRef = firebase.storage().ref();
            storageRef.child('questions/' + filenameUuid + '-' + fileName).put(blob).then((snapshot) => {
                blob.close();
                //console.log(snapshot);
                resolve(snapshot);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    
    const handleDocumentPicker = () => {
        DocumentPicker.getDocumentAsync().then((results) => {
            if (results.type !== 'cancel') {
                const { uri, name, size } = results;
                console.log('URI = ', uri);
                console.log('name = ', name);
                console.log('size = ', size);
                fileName = name;
                return uriToBlob(uri);
            }
        }).then((blob) => {
            console.log(fileName);
            return uploadToFirebase(blob, fileName);
        }).then((snapshot) => {
            setFileUploaded(true);
            console.log('File Uploaded');
        }).catch((error) => {
            throw error;
        });
    }


    return (
        <View style={styles.container} >
            <Spacer>
                <Text h3 style={{ color: 'white' }} > Your question </Text>
            </Spacer>

            <Spacer>
                <Input
                    value={question}
                    multiline={true}
                    onChangeText={(newQuestion) => { setQuestion(newQuestion) }}
                    autoCorrect={false}
                    autoCapitalize="none"
                    inputContainerStyle={styles.inputContainerStyle}
                />
            </Spacer>

            <Spacer>
                <Text h3 style={{ color: 'white' }} > Select tags </Text>
            </Spacer>

            <Spacer>
                <Picker
                    selectedValue={tag}
                    style={{ height: 43, width: 375, backgroundColor: 'white', alignSelf: 'center', borderWidth: 1, borderColor: 'white', borderRadius: 16 }}
                    onValueChange={(itemValue, itemIndex) =>
                        setTag(itemValue)
                    }
                    mode='dropdown'
                >
                    <Picker.Item label="Select Speciality" value="Select Speciality " />
                    <Picker.Item label="Cardiology" value="Cardiology" />
                    <Picker.Item label="Cosmetology" value="Cosmetology" />
                    <Picker.Item label="Covid 19" value="Covid 19" />
                    <Picker.Item label="Dental Sciences" value="Dental Sciences" />
                    <Picker.Item label="Dermatology" value="Dermatology" />
                    <Picker.Item label="Endocrinology" value="Endocrinology" />
                    <Picker.Item label="ENT" value="ENT" />
                    <Picker.Item label="Gastroenterology" value="Gastroenterology" />
                    <Picker.Item label="General Medicine" value="General Medicine" />
                    <Picker.Item label="General Surgery" value="General Surgery" />
                    <Picker.Item label="Gynecology" value="Gynecology" />
                    <Picker.Item label="ICU" value="ICU" />
                    <Picker.Item label="Nephrology" value="Nephrology" />
                    <Picker.Item label="Neurology" value="Neurology" />
                    <Picker.Item label="Oncology" value="Oncology" />
                    <Picker.Item label="Ophthalmology" value="Ophthalmology" />
                    <Picker.Item label="Pathology" value="Pathology" />
                    <Picker.Item label="Pediatrics" value="Pediatrics" />
                    <Picker.Item label="Plastic Surgery" value="Plastic Surgery" />
                    <Picker.Item label="Psychiatry" value="Psychiatry" />
                    <Picker.Item label="Radiology" value="Radiology" />
                    <Picker.Item label="Urology" value="Urology" />
                </Picker>
            </Spacer>


            <Spacer>
                <Spacer>
                    <Button buttonStyle={{
                        backgroundColor: '#9C3C37'
                    }} title="Add attachment" onPress={() => { handleDocumentPicker() }} />
                </Spacer>
                {fileUploaded ? <Text>{fileName}</Text> : null}
            </Spacer>

            <Spacer>
                <Spacer>
                    <Button buttonStyle={{
                        backgroundColor: '#9C3C37'
                    }} title="Ask" onPress={() => { saveQuestion(question, tag, filenameUuid + '-' + fileName) }} />

                </Spacer>
            </Spacer>
        </View>
    );
}

AddQuestionScreen.navigationOptions = () => {
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
    inputContainerStyle: {
        borderWidth: 1,
        borderColor: '#CA534C',
        borderRadius: 5,
        backgroundColor: '#ffffff',
    }
});

export default AddQuestionScreen;