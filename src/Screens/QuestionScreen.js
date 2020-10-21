import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import FloatingActionButton from '../Components/FloatingActionButton';
import { MaterialIcons } from '@expo/vector-icons';
import QuestionCard from '../Components/QuestionCard';

const QuestionScreen = ({ navigation }) => {
    const key = navigation.getParam('key');
    const question = navigation.getParam('question');
    const name = navigation.getParam('name');
    const noOfAnswers = navigation.getParam('noOfAnswers');
    const noOfInsightfuls = navigation.getParam('noOfInsightfuls');
    const tag = navigation.getParam('tag');
    const filename = navigation.getParam('filename');

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