import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import contactus from '../../assets/contact-us.png';
import { Button } from 'react-native-elements';
const ContactUsScreen = () => {
    return (
        <View>
            <Image style={{ width: 250, height: 250, alignSelf: 'center' }} source={contactus} />

            <Button buttonStyle={{
                backgroundColor: '#9C3C37',
                marginHorizontal: 16
            }} onPress={() => Linking.openURL('mailto:docquecommunity@gmail.com')}
                title="Send Mail"

            />

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


const styles = StyleSheet.create({
    textBold: {
        color: '#6C6C6C',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 32
    }
});

export default ContactUsScreen;