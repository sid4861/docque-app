import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const QuestionCard = ({ questsion, name, time, noOfAnswers, noOfInsightfuls, tag }) => {

    return (
        <View>
            <Text style={styles.questionStyle} >What communication milestones should you expect in your 10-month-old?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }} >
                <Text style={styles.nameStyle} >Siddharth Lodha</Text>
                <Text style={styles.timeStyle} > 2 days ago </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }} >
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }} >
                    <Text style={{ fontSize: 12, color: '#6C6C6C' }} >Answers 20</Text>
                    {/* <View style={{ flexDirection: 'row' }} > */}
                        <MaterialIcons name="trending-up" size={24} color="#CA534C" />
                        <Text style={{ fontSize: 12, color: '#6C6C6C' }} >23</Text>
                    {/* </View> */}
                </View>

                {/* <View style={{ justifyContent: 'flex-end' }} > */}
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#CA534C', justifyContent: 'flex-end' }} >Pediatrics</Text>
                {/* </View> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    questionStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        width: 400,
        lineHeight: 24,
        alignSelf: 'flex-start'
    },
    nameStyle: {
        fontSize: 12
    },
    timeStyle: {
        fontSize: 12,
        color: '#6C6C6C'
    }
});

export default QuestionCard;