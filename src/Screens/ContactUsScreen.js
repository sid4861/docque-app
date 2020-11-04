import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ContactUsScreen = () => {
    return(
        <View>
            <Text>
                Contact us Screen
            </Text>
        </View>
    );
}

ContactUsScreen.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ marginLeft: 24 }} onPress={() => navigation.openDrawer()}>
                    <MaterialIcons name="menu" size={24} color="white" />
                </TouchableOpacity>
            </View>
        ),
        title: 'Contact Us',
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


export default ContactUsScreen;