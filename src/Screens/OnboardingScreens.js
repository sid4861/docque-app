import React, { Component } from 'react';
import {
    StyleSheet,   // CSS-like styles
    Text,         // Renders text
    View,
    Image          // Container component
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from '../Components/Swiper';
import onboarding1 from '../../assets/onboarding1.png';
import onboarding2 from '../../assets/onboarding2.png';
import onboarding3 from '../../assets/onboarding3.png';

export default class OnboardingScreens extends Component {
    render() {
        return (
            <Swiper navigation={this.props.navigation} >
                {/* First screen */}
                <View style={[styles.slide, { backgroundColor: '#ffffff' }]}>
                    <Image style={{ width: 250, height: 250 }} source={onboarding1} />
                    <Text style={styles.text}>A community for medical students and doctors to<Text style={styles.textBold} > ask questions </Text>and<Text style={styles.textBold} > share knowledge </Text>.</Text>
                </View>
                {/* Second screen */}
                <View style={[styles.slide, { backgroundColor: '#ffffff' }]}>
                    <Image style={{ width: 250, height: 250 }} source={onboarding2} />
                    <Text style={styles.text}><Text style={styles.textBold} > Filter questions </Text>with medical speciality to find relatable content.</Text>
                </View>
                {/* Third screen */}
                <View style={[styles.slide, { backgroundColor: '#ffffff' }]}>
                    <Image style={{ width: 250, height: 250 }} source={onboarding3} />
                    <Text style={styles.text}>Mark answers and questions as<Text style={styles.textBold} > insightful </Text>to help content gain credence among users.</Text>
                </View>
            </Swiper>
        );
    }
}

const iconStyles = {
    size: 100,
    color: '#FFFFFF',
};

const styles = StyleSheet.create({
    // Slide styles
    slide: {
        flex: 1,                    // Take up all screen
        justifyContent: 'center',   // Center vertically
        alignItems: 'center',       // Center horizontally
    },
    // Header styles
    header: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    // Text below header
    text: {
        color: '#000000',
        fontSize: 17,
        marginHorizontal: 40,
        textAlign: 'left',
        lineHeight: 30
    },
    textBold: {
        color: '#CA534C',
        fontWeight: 'bold'
    }
});