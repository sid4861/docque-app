import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const ProfileData = ({ profileData }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.labelStyle} >
                Name
            </Text>
            <View
                style={{
                    borderBottomColor: '#CA534C',
                    borderBottomWidth: 2,
                    marginLeft: 32,
                    marginRight: 40
                }}
            />
            <Text style={styles.textStyle} >
                {profileData.name}
            </Text>

            <Text style={styles.labelStyle} >
                Email
            </Text>
            <View
                style={{
                    borderBottomColor: '#CA534C',
                    borderBottomWidth: 2,
                    marginLeft: 32,
                    marginRight: 40
                }}
            />
            <Text style={styles.textStyle} >
                {profileData.email}
            </Text>

            <Text style={styles.labelStyle} >
                Country
            </Text>
            <View
                style={{
                    borderBottomColor: '#CA534C',
                    borderBottomWidth: 2,
                    marginLeft: 32,
                    marginRight: 40
                }}
            />
            <Text style={styles.textStyle} >
                {profileData.country}
            </Text>

            <Text style={styles.labelStyle} >
                Student ?
            </Text>
            <View
                style={{
                    borderBottomColor: '#CA534C',
                    borderBottomWidth: 2,
                    marginLeft: 32,
                    marginRight: 40
                }}
            />
            <Text style={styles.textStyle} >
                {profileData.isStudent}
            </Text>

            <Text style={styles.labelStyle} >
                Highest Qualification
            </Text>
            <View
                style={{
                    borderBottomColor: '#CA534C',
                    borderBottomWidth: 2,
                    marginLeft: 32,
                    marginRight: 40
                }}
            />
            <Text style={styles.textStyle} >
                {profileData.degree}
            </Text>

            <Text style={styles.labelStyle} >
                Questions asked
            </Text>
            <View
                style={{
                    borderBottomColor: '#CA534C',
                    borderBottomWidth: 2,
                    marginLeft: 32,
                    marginRight: 40
                }}
            />
            <Text style={styles.textStyle} >
                {Object.keys(profileData.questions).length}
            </Text>


            <Text style={styles.labelStyle} >
                Answers posted
            </Text>
            <View
                style={{
                    borderBottomColor: '#CA534C',
                    borderBottomWidth: 2,
                    marginLeft: 32,
                    marginRight: 40
                }}
            />
            <Text style={styles.textStyle} >
                {Object.keys(profileData.answers).length}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: 64
    },
    labelStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#CA534C',
        marginTop: 24,
        marginLeft: 32
    },
    textStyle: {
        fontSize: 16,
        color: '#6C6C6C',
        marginTop: 8,
        marginLeft: 32,
    }
});

export default ProfileData;