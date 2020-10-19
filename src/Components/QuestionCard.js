import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const QuestionCard = ({ question, name, noOfAnswers, noOfInsightfuls, tag }) => {

    return (
        <View style={{marginTop: 8, backgroundColor: 'white', padding: 8}}>
            <Text style={styles.questionStyle} >{question}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }} >
                <Text style={styles.nameStyle} >{name}</Text>
                <Text style={styles.timeStyle} > 2 days ago </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, justifyContent: 'space-between' }} >
                <View style={{ flexDirection: 'row' }} >
                    <Text style={{ fontSize: 12, color: '#6C6C6C' }} >Answers {noOfAnswers}</Text>

                    <View style={{flexDirection: 'row', marginLeft: 16}}>
                        {/* <MaterialIcons name="trending-up" size={24} color="#CA534C" /> */}
                        <Image   style={{width: 24, height:  24}} source={ require('../../assets/heart-pulse-line.png')} />
                        <Text style={{ fontSize: 12, color: '#6C6C6C' }} >{noOfInsightfuls}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#CA534C' }} >{tag}</Text>
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
        color :'#6C6C6C',
        fontWeight: 'bold'
    },
    timeStyle: {
        fontSize: 12,
        color: '#6C6C6C',
        fontWeight: 'bold'
    }
});

export default QuestionCard;