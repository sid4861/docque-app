import React from 'react';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';

const NavLink = ({ navigation, text, routeName }) => {
    return (
        <Spacer>
            <TouchableOpacity onPress={() => { navigation.navigate(routeName) }} >
                <Text style={styles.link} > {text} </Text>
            </TouchableOpacity>
        </Spacer>
    );
};

const styles = StyleSheet.create({
    link: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center'
    }
});

export default withNavigation(NavLink);