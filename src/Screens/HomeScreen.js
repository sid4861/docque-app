import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../Context/AuthContext';
import LoadingScreen from './LoadingScreen';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import QuestionCard from '../Components/QuestionCard';

const HomeScreen = () => {

    return (

        <View style={styles.container} >
            <QuestionCard />
        </View>

    );


};

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <View style={{flexDirection: 'row'}} >
                <TouchableOpacity style={{ marginRight: 24 }} onPress={() => navigation.navigate('')}>
                    <FontAwesome name="filter" size={24} color="white" />
                </TouchableOpacity>
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
        
    }
});

export default HomeScreen;