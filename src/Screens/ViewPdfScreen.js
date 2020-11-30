import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { Text } from 'react-native-elements';

const ViewPdfScreen = ({ navigation }) => {

    const fileUrl = navigation.getParam('fileUrl');
    const googleDocsAppendedUrl = 'http://docs.google.com/gview?embedded=true&url='+fileUrl;
    return (

        <WebView
            bounces={false}
            scrollEnabled={false}
            source={{ uri: fileUrl }}
        />

    );

}

ViewPdfScreen.navigationOptions = () => {
    return {
        header: () => false
    };
};


export default ViewPdfScreen;