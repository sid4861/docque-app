import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const YourAnswersScreen = () => {
    return(
        <View>
            <Text>
                Your Answers Screen
            </Text>
        </View>
    );
}

YourAnswersScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ marginRight: 24 }} onPress={() => navigation.navigate('')}>
                    <FontAwesome name="filter" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 24 }} onPress={() => navigation.navigate('')}>
                    <MaterialIcons name="sort" size={24} color="white" />
                </TouchableOpacity>
            </View>
        ),
        headerLeft: () => (
            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ marginLeft: 24 }} onPress={() => navigation.openDrawer()}>
                    <MaterialIcons name="menu" size={24} color="white" />
                </TouchableOpacity>
            </View>
        ),
        title: 'Your Answers',
        headerStyle: {
            backgroundColor: '#CA534C'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontWeight: 'normal',
            alignSelf: 'center',
            fontSize: 24
        }
    };
};


export default YourAnswersScreen;