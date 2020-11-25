import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import { Context as questionContext } from '../Context/QuestionContext';

const CommentItem = ({ name, date, comment }) => {

    return (
        <View style={{ marginTop: 8, backgroundColor: 'white', padding: 8 }} >

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }} >
                <Text style={styles.nameStyle} >{name}</Text>
                <Text style={styles.timeStyle} > {moment(new Date(date).toISOString()).fromNow()} </Text>
            </View>

            <Text style={styles.answerStyle} >{comment}</Text>

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

export default CommentItem;