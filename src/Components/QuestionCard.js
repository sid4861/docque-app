import React from 'react';
import {  StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import QuestionCardContent from './QuestionCardContent';

const QuestionCard = ({ question, name, noOfAnswers, noOfInsightfuls, tag, key, filename, date }) => {


 
    return (
            <QuestionCardContent question={question}
                name={name}
                noOfAnswers={noOfAnswers}
                noOfInsightfuls={noOfInsightfuls}
                tag={tag}
                filename={filename}
                date={date}
            />
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
        fontWeight: 'bold'
    },
    timeStyle: {
        fontSize: 12,
        color: '#6C6C6C',
        fontWeight: 'bold'
    }
});

export default withNavigation(QuestionCard);