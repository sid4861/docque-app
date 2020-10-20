import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import FloatingActionButton from '../Components/FloatingActionButton';
import { MaterialIcons } from '@expo/vector-icons';
import QuestionCard from '../Components/QuestionCard';

const QuestionScreen = () => {
    return(
        <View>
            <Text>Question Screen</Text>
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

});

export default QuestionScreen;