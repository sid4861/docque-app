import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import { Context as questionContext } from '../Context/QuestionContext';

const AnswerItem = ({ answer, noi, date, answerKey, questionId, userId, comments, name, navigation }) => {

    const [isLiked, setIsLiked] = useState(false);
    const { incrementInsightfulForAnswer } = useContext(questionContext);

    let likeButton = null;

    if (isLiked) {
        likeButton = <View style={{ flexDirection: 'row', marginLeft: 16 }}>
            <Image style={{ width: 24, height: 24 }} source={require('../../assets/heart-pulse-fill.png')} />
            <Text style={{ fontSize: 12, color: '#6C6C6C', marginLeft: 4 }} >{noi + 1}</Text>
        </View>

    } else {
        likeButton =
            <TouchableOpacity onPress={() => { incrementInsightfulForAnswer(answerKey); setIsLiked(true) }} >
                <View style={{ flexDirection: 'row', marginLeft: 16 }}>
                    <Image style={{ width: 24, height: 24 }} source={require('../../assets/heart-pulse-line.png')} />
                    <Text style={{ fontSize: 12, color: '#6C6C6C', marginLeft: 4 }} >{noi}</Text>
                </View>
            </TouchableOpacity>
    }

    return (
        <View style={{ marginTop: 8, backgroundColor: 'white', padding: 8 }} >

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }} >
                <Text style={styles.nameStyle} >{name}</Text>
                <Text style={styles.timeStyle} > {moment(new Date(date).toISOString()).fromNow()} </Text>
            </View>

            <Text style={styles.answerStyle} >{answer}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }} >

                {likeButton}

                <TouchableOpacity onPress={() => {navigation.navigate('CommentsScreen', {answerId: answerKey})}} >
                    <View style={{ flexDirection: 'row', marginRight: 16 }}>
                        <MaterialIcons name="comment" size={24} color="#CA534C" />
                        <Text style={{ fontSize: 12, color: '#6C6C6C', marginLeft: 4 }} >{comments !== undefined ? Object.keys(comments).length : 0}</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    answerStyle: {
        fontSize: 16,
        width: 400,
        lineHeight: 24,
        marginTop: 16
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

    }
});

export default withNavigation(AnswerItem);