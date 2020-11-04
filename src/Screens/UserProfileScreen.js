import React, { useEffect, useContext } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Context as UserProfileContext } from '../Context/UserProfileContext';
import ProfileData from '../Components/ProfileData';

const UserProfileScreen = ({ navigation }) => {

    const { getUserProfileDetails, state } = useContext(UserProfileContext);

    useEffect(() => {
        getUserProfileDetails();
    }, []);

    return (
        <View>
            {state.profileData != null ? <ProfileData  profileData={state.profileData} /> : <ActivityIndicator size="large" color="#CA534C" style={{ marginTop: 48, alignSelf: 'center' }} />}
        </View>
    );
}

UserProfileScreen.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ marginLeft: 24 }} onPress={() => navigation.openDrawer()}>
                    <MaterialIcons name="menu" size={24} color="white" />
                </TouchableOpacity>
            </View>
        ),
        title: 'Profile',
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

export default UserProfileScreen;