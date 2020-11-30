import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomSortIconHomeScreen from '../Components/CustomSortIconHomeScreen';
import { FontAwesome } from '@expo/vector-icons';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const HomeScreenFilterAndSort = ({ navigation }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 }} >
            <CustomSortIconHomeScreen menuStyle={{ marginRight: 24 }} />
            <View>
                <TouchableOpacity onPress={() => { navigation.navigate('TagFiltersScreen') }} style={{ flexDirection: 'row' }} >
                    <FontAwesome name="filter" size={24} color="#CA534C" style={{ marginLeft: 16 }} />
                    <Text style={{ color: '#CA534C', marginLeft: 16, fontSize: 16 }} >Filter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default withNavigation(HomeScreenFilterAndSort);