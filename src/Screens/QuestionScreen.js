import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-elements';
import FloatingActionButton from '../Components/FloatingActionButton';
import { MaterialIcons } from '@expo/vector-icons';
import QuestionCard from '../Components/QuestionCard';
import { Context as QuestionContext } from '../Context/QuestionContext';
import noAnswers from '../../assets/no-answers.png';
import AnswersList from '../Components/AnswersList';

const QuestionScreen = ({ navigation }) => {
    const key = navigation.getParam('key');
    const question = navigation.getParam('question');
    const name = navigation.getParam('name');
    const noOfAnswers = navigation.getParam('noOfAnswers');
    const noOfInsightfuls = navigation.getParam('noOfInsightfuls');
    const tag = navigation.getParam('tag');
    const filename = navigation.getParam('filename');

    const { getAllAnswers, state } = useContext(QuestionContext);

    useEffect(() => {
        getAllAnswers(key);
    }, [state.answers.length]);

    return (
        <View style={styles.container} >
            <QuestionCard
                question={question}
                name={name}
                noOfAnswers={noOfAnswers}
                noOfInsightfuls={noOfInsightfuls}
                tag={tag}
                key={key}
                filename={filename}
            />
            <Text style={{marginTop: 8, color: '#CA534C', alignSelf: 'center'}} > Answers </Text>
            {state.answers.length > 0 ? <AnswersList  answers={state.answers} /> :
                <View style={{ marginTop: 100, flexDirection: 'column', alignItems: 'center' }} >
                    <Image style={{ width: 350, height: 350 }} source={noAnswers} />
                    <Text style={{textAlign: 'center', lineHeight: 24, fontSize: 14, color: '#6C6C6C'}} > Oops! No answers for this question, add an answer by tapping on the + button below.   </Text>
                </View>}

            <FloatingActionButton />
        </View>
    );
}

QuestionScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ marginRight: 24 }} onPress={() => navigation.navigate('')}>
                    <MaterialIcons name="sort" size={24} color="white" />
                </TouchableOpacity>
            </View>
        ),
        title: 'DOCQUE',
        headerStyle: {
            backgroundColor: '#CA534C'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontWeight: 'normal',
            alignSelf: 'center',
            letterSpacing: 8,
            fontSize: 24
        }
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default QuestionScreen;