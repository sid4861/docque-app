import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import moment from 'moment';
import { Context as questionContext } from '../Context/QuestionContext';
import * as firebase from 'firebase/app';
import 'firebase/storage';

const QuestionCardContent = ({ question, name, noOfAnswers, noOfInsightfuls, tag, questionId, filename, date }) => {

    const [isLiked, setIsLiked] = useState(false);
    const { incrementInsightful } = useContext(questionContext);

    const getFirebaseFileDownloadUrl = () => {
        if (filename !== null) {
            var storageRef = firebase.storage().ref('/questions/' + filename);
            storageRef.getDownloadURL()
                .then((url) => {
                    console.log('file url', url);
                })
                .catch((e) => {
                    console.log('getting error while downloading file', e);
                });
        }
    }

    let likeButton = null;
    if (isLiked) {
        likeButton = <View style={{ flexDirection: 'row', marginLeft: 16 }}>
            {/* <MaterialIcons name="trending-up" size={24} color="#CA534C" /> */}
            <Image style={{ width: 24, height: 24 }} source={require('../../assets/heart-pulse-fill.png')} />
            <Text style={{ fontSize: 12, color: '#6C6C6C' }} >{noOfInsightfuls + 1}</Text>
        </View>

    } else {
        likeButton =
            <TouchableOpacity onPress={() => { incrementInsightful(questionId); setIsLiked(true) }} >
                <View style={{ flexDirection: 'row', marginLeft: 16 }}>
                    {/* <MaterialIcons name="trending-up" size={24} color="#CA534C" /> */}
                    <Image style={{ width: 24, height: 24 }} source={require('../../assets/heart-pulse-line.png')} />
                    <Text style={{ fontSize: 12, color: '#6C6C6C' }} >{noOfInsightfuls}</Text>
                </View>
            </TouchableOpacity>
    }
    return (
        <View style={{ marginTop: 8, backgroundColor: 'white', padding: 8 }}>
            <Text style={styles.questionStyle} >{question}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }} >
                <Text style={styles.nameStyle} >{name}</Text>
                <Text style={styles.timeStyle} > {moment(new Date(date).toISOString()).fromNow()} </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, justifyContent: 'space-between' }} >
                <View style={{ flexDirection: 'row' }} >
                    <Text style={{ fontSize: 12, color: '#6C6C6C' }} >Answers {noOfAnswers}</Text>

                    {likeButton}

                </View>

                <View style={{ flexDirection: 'row' }} >

                    {
                        filename ?
                            <TouchableOpacity onPress={() => { getFirebaseFileDownloadUrl() }} >
                                <View style={{ flexDirection: 'row', marginRight: 16 }}>
                                    <Entypo name="attachment" size={24} color="#CA534C" />
                                    <Text style={{ fontSize: 12, color: '#6C6C6C', marginLeft: 4 }} >1</Text>
                                </View>

                            </TouchableOpacity>
                            :
                            null
                    }

                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#CA534C' }} >{tag}</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    questionStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        width: 400,
        lineHeight: 24
    },
    nameStyle: {
        fontSize: 12,
        color: '#6C6C6C',
        fontWeight: 'bold',
        color: '#CA534C',
        textTransform: 'capitalize'
    },
    timeStyle: {
        fontSize: 12,
        color: '#6C6C6C',
        fontWeight: 'bold'
    }
});

export default QuestionCardContent;